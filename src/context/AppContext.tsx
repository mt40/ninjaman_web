import {none, Option, some} from 'ts-option'
import {defaultListingActions, Listing, ListingActions} from './listing'
import {defaultQueryActions, QueryActions, QueryContext} from './query'

export interface AppContext {
  data: {
    listing: Option<Listing>
    query: QueryContext
  },
  action: {
    listing: ListingActions,
    query: QueryActions,
  }
}

export const defaultContext: AppContext = {
  data: {
    listing: none,
    query: {
      current: 0,
      answers: [],
    },
  },
  action: {
    listing: defaultListingActions,
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

  setListingContext(lc: Listing) {
    this.setState({
      ...this.context,
      data: {
        ...this.context.data,
        listing: some(lc),
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
