import { injectable, inject } from "inversify";
import "reflect-metadata";
import moment from "moment";
import { v4 } from "uuid";
import { AggregateRoot, COMPONENT, EntityService, Flag, HttpService, Nullable } from './../common/types';

// mock data for now
const flag1: Flag = {
  id: 1,
  uuid: v4(),
  name: 'test-flag-1',
  description: 'test-description-1',
  alias: 'test-alias-1',
  isEnabled: true,
  defaultServeValue: {
    state: true
  },
  deleteFlag: false,
  createdAt: moment.utc().toDate()
};

const flag2: Flag = {
  id: 2,
  uuid: v4(),
  name: 'test-flag-2',
  description: 'test-description-2',
  alias: 'test-alias-2',
  isEnabled: true,
  defaultServeValue: {
    state: false
  },
  deleteFlag: false,
  createdAt: moment.utc().toDate()
};

const flagData: Flag[] = [
  flag1,
  flag2,
];

@injectable()
class MockHttpService implements HttpService {
  public get<TResponse>(id: number): Nullable<TResponse> {
    return <Nullable<TResponse>>flagData.find(f => f.id === id);
  }
  public enumerate<TResponse>(): TResponse[] {
    return <TResponse[]>(flagData as unknown);
  }

  // public post<TResponse>(body: string): TResponse
  // delete<TResponse>(body: string): TResponse
}

@injectable()
export class FlagService implements EntityService {
  private _httpService: HttpService;

  public constructor(
    @inject(COMPONENT.HttpService) httpService: HttpService
  ) {
    this._httpService = httpService;
  }

  public enumerate(): Flag[] {
    return this._httpService.enumerate<Flag>();
  }

  public get(id: number): Nullable<Flag> {
    return this._httpService.get<Flag>(id);
  }
}