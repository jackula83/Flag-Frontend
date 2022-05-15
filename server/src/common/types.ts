export type Nullable<T> = T | undefined | null

export type EntityModel<T> = {
  Items: T[],
  Item: T
}

export interface AggregateRoot {
  id: number,
  uuid: string,
  deleteFlag: boolean,
  createdAt: Date,
  updatedAt?: Date,
  createdBy?: string,
  updatedBy?: string
}

export interface ServeValue {
  state: boolean
}

export interface Flag extends AggregateRoot {
  name: string,
  description: string,
  alias: string,
  isEnabled: boolean
  defaultServeValue: ServeValue
}

// set up dependency injection components
export interface EntityService {
  enumerate(): Promise<Flag[]>;
  get(id: number): Promise<Nullable<Flag>>;
}

export interface HttpService {
  get<TResponse>(id: number): Promise<Nullable<TResponse>>
  enumerate<TResponse>(): Promise<TResponse>
  // post<TResponse>(body: string): Nullable<TResponse>
  // delete<TResponse>(body: string): Nullable<TResponse>
}

export interface LogService {
  info(message: string): void
  error(error: (Error | string)): void
}