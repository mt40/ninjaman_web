import {none, Option, some} from 'ts-option'
import {defaultListingActions, ServiceActions, ServiceContext} from './service'
import {defaultQueryActions, QueryActions, QueryContext} from './query'

export interface AppContext {
  data: {
    service: Option<ServiceContext>
    query: QueryContext
  },
  action: {
    service: ServiceActions,
    query: QueryActions,
  }
}

export const defaultContext: AppContext = {
  data: {
    service: none,
    query: {
      current: 0,
      answers: [],
    },
  },
  action: {
    service: defaultListingActions,
    query: defaultQueryActions,
  },
}

export class AppContextAsState {
  context: AppContext
  setState: (c: AppContext) => void

  constructor(context: AppContext, setState: (c: AppContext) => void) {
    this.context = context
    this.setState = setState
  }

  setServiceContext(s: ServiceContext) {
    this.setState({
      ...this.context,
      data: {
        ...this.context.data,
        service: some(s),
      },
    })
  }

  setQueryContext(qc: QueryContext) {
    this.setState({
      ...this.context,
      data: {
        ...this.context.data,
        query: qc,
      },
    })
  }
}
