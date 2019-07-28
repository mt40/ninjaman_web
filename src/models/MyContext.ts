import { none, Option, some } from 'ts-option'
import { ServiceContext } from './ServiceContext'
import { Cart } from './Cart'
import { groupOf, QueryInfo, ServiceInfo } from '../config/services'
import { QueryAnswer } from './QueryAnswer'
import { UserInfo } from './UserInfo'
import { Lang } from './Lang'
import * as _ from 'lodash'
import React from 'react'
import { AppProps } from '../App'

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

export const defaultContext: MyContext = {
  data: {
    query: {answers: [] as QueryAnswer[]},
    service: none as Option<ServiceContext>,
    cart: new Cart(),
    user: UserInfo.default,
    lang: Lang.VN,
  },
  action: {
    answer: () => {},
    popAnswer: () => {},
    clearAnswers: () => {},
    getNextQuery: () => none,
    setService: () => {},
    setCart: () => {},
    clearCart: () => {},
    setUser: () => {},
    setLang: () => {},
  },
}

export const contextFor = (app: React.Component<AppProps, MyContext>) => {
  const appData = () => app.state.data

  const getLang = () => {
    if (app.props.cookies) {
      const fromCookie = app.props.cookies.get('lang')
      return fromCookie ? Lang.fromName(fromCookie) : Lang.VN
    }
    return Lang.VN
  }

  const setStateIfDifferent = (newState: MyContext) => {
    if (!_.isEqual(newState.data, app.state.data)) {
      app.setState(newState)
    }
  }

  const setQuery = (ans: QueryAnswer[]) => {
    setStateIfDifferent({
      ...app.state,
      data: {...app.state.data, query: {answers: ans}},
    })
  }

  const setService = (sv: Option<ServiceContext>) => {
    setStateIfDifferent({
      ...app.state,
      data: {...app.state.data, service: sv},
    })
  }

  const setCart = (c: Cart) => {
    setStateIfDifferent({
      ...app.state,
      data: {...app.state.data, cart: c},
    })
  }

  const setUser = (u: UserInfo) => {
    setStateIfDifferent({
      ...app.state,
      data: {...app.state.data, user: u},
    })
  }

  const setLang = (l: Lang) => {
    setStateIfDifferent({
      ...app.state,
      data: {...app.state.data, lang: l},
    })
  }

  return {
    data: {
      query: {answers: []},
      service: none,
      cart: new Cart(),
      user: UserInfo.default,
      lang: getLang(),
    },
    action: {
      answer: (query: QueryInfo, ...answers: string[]) => {
        setQuery(
          appData().query.answers.concat(
            answers.map(a => {
              return {query: query, get: a}
            }),
          ),
        )
      },
      popAnswer: () => setQuery(_.dropRight(appData().query.answers)),
      clearAnswers: () => setQuery([]),
      getNextQuery: (): Option<QueryInfo> => {
        const next = appData().query.answers.length
        return appData().service.map((sv: ServiceContext) => {
          return sv.info.queries[next]
        })
      },
      setService: (sv: ServiceInfo) => {
        setService(
          some({
            group: groupOf(sv),
            info: sv,
          }),
        )
      },
      setCart: (lastAns: string, count: number) => {
        const chain = appData().query.answers.map(a => a.get).concat([lastAns])
        setCart(appData().cart.set(chain, count))
      },
      clearCart: () => setCart(new Cart()),
      setUser: (user: UserInfo) => setUser(user),
      setLang: (lang: Lang) => setLang(lang),
    },
  }
}
