import {ServiceInfo} from '../config/services'

class Page {
  path: string

  constructor(path: string) {
    this.path = path
  }

  public toString(): string {
    return this.path
  }
}

export const home = new Page('/')
export const serviceDetail = (sv: ServiceInfo) => {
  const hyphenName = sv.name.toLowerCase().replace(new RegExp('\\s+'), ' ').replace(' ', '-')
  return new Page(`/service/${hyphenName}`)
}
export const queryN = (sv: ServiceInfo, n: number) => new Page(`${serviceDetail(sv)}/q${n}`)
export const userInfo = (sv: ServiceInfo) => new Page(`${serviceDetail(sv)}/info`)
export const checkout = (sv: ServiceInfo) => new Page(`${serviceDetail(sv)}/checkout`)
export const bookingConfirm = (sv: ServiceInfo) => new Page(`${serviceDetail(sv)}/confirm`)