import { EntityService, HttpService, LogService } from "./types"

export interface Component {
  HttpService: symbol,
  LogService: symbol,
  EntityService: symbol
}

const COMPONENT: Component = {
  HttpService: Symbol.for(nameof<HttpService>()),
  LogService: Symbol.for(nameof<LogService>()),
  EntityService: Symbol.for(nameof<EntityService>())
}

export { COMPONENT }