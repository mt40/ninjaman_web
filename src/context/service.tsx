import {ServiceGroup, ServiceInfo} from '../config/services'

export interface ServiceContext {
  group: ServiceGroup
  info: ServiceInfo
}

export interface ServiceActions {
  setCurrent: (sv: ServiceInfo) => void
}

export const defaultListingActions: ServiceActions = {
  setCurrent: () => {},
}