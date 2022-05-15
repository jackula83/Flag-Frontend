import axios, { AxiosResponse } from 'axios';
import { inject, injectable } from 'inversify';
import { COMPONENT } from '../common/component';
import { HttpService, Nullable } from '../common/types';
import { LogService } from './../common/types';

@injectable()
export class AxiosHttpService implements HttpService {
  private readonly url: string;
  private readonly logger: LogService;

  constructor(
    url: string,    
    @inject(COMPONENT.LogService) logService: LogService) {
    this.url = url;
    this.logger = logService
  }

  async get<TResponse>(id: number): Promise<Nullable<TResponse>> {
    const response = await axios.get<TResponse>(`${this.url}/${id}`);
    this.handleAnyErrors(response);
    return response.data;
  }
  
  async enumerate<TResponse>(): Promise<TResponse> {
    const response = await axios.get<TResponse>(`${this.url}`);
    this.handleAnyErrors(response);
    return response.data;
  }

  private handleAnyErrors = (response: AxiosResponse): void => {
    if (this.isExpectedError(response.status))
      this.logAndThrowError(response.statusText);
  }

  private isExpectedError = (httpStatus: number): boolean => 
    httpStatus >= 400 && httpStatus < 500;

  private logAndThrowError = (statusText: string): void => {
    this.logger.error(statusText);
    throw new Error(statusText);
  }
}