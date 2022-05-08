export type Nullable<T> = T | undefined | null

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
  enumerate(): Flag[];
  get(id: number): Nullable<Flag>;
}

export interface HttpService {
  get<TResponse>(id: number): Nullable<TResponse>
  enumerate<TResponse>(): TResponse[]
  // post<TResponse>(body: string): Nullable<TResponse>
  // delete<TResponse>(body: string): Nullable<TResponse>
}

export interface Component {
  HttpService: symbol,
  EntityService: symbol
}

const COMPONENT: Component = {
  HttpService: Symbol.for(nameof<HttpService>()),
  EntityService: Symbol.for(nameof<EntityService>())
}

export { COMPONENT }