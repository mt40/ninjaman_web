import { Option } from 'ts-option'
import { ServiceContext } from '../context/service'
import { Cart } from './Cart'
import { QueryInfo, ServiceInfo } from '../config/services'
import { QueryAnswer } from './QueryAnswer'
import { UserInfo } from './UserInfo'
import { Lang } from './Lang'

export interface MyContext {
  data: {
    query: {
      answers: QueryAnswer[]
    },
    service: Option<ServiceContext>,
    cart: Cart,
    user: UserInfo,
    lang: Lang,
  },
  action: {
    answer: (query: QueryInfo, ...answers: string[]) => void,
    popAnswer: () => void,
    clearAnswers: () => void,
    getNextQuery: () => Option<QueryInfo>,
    setService: (sv: ServiceInfo) => void,
    setCart: (lastAns: string, count: number) => void,
    clearCart: () => void,
    setUser: (user: UserInfo) => void,
    setLang: (lang: Lang) => void,
  }
}
