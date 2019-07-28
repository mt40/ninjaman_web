import { ServiceGroup, ServiceInfo } from '../config/services'

export interface ServiceContext {
  group: ServiceGroup
  info: ServiceInfo
}