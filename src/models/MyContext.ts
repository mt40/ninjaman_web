import { Option } from 'ts-option'
import { ServiceContext } from '../context/service'
import { Cart } from './Cart'
import { QueryInfo, ServiceInfo } from '../config/services'
import { QueryAnswer } from './QueryAnswer'

export interface MyContext {
  data: {
    query: {
      answers: QueryAnswer[]
    },
    service: Option<ServiceContext>,
    cart: Cart,
  },
  action: {
    answer: (query: QueryInfo, answer: string) => void,
    popAnswer: () => void,
    clearAnswers: () => void,
    getNextQuery: () => Option<QueryInfo>,
    setService: (sv: ServiceInfo) => void,
    setCart: (lastAns: string, count: number) => void,
    clearCart: () => void,
  }
}
