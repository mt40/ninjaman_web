import {Listing} from './listing'
import {QueryContext} from './query'
import {AppContext, AppContextAsState, defaultContext} from './AppContext'
import {Option} from 'ts-option'

function mkListingAction(
  state: AppContextAsState,
  f: (prevState: Option<Listing>) => Listing,
): void {
  const newContext = f(state.context.data.listing)
  state.setListingContext(newContext)
}

function mkQueryAction(
  state: AppContextAsState,
  f: (prevState: QueryContext) => QueryContext,
): void {
  const newContext = f(state.context.data.query)
  state.setQueryContext(newContext)
}

export function contextFor(state: AppContextAsState): AppContext {
  return {
    ...state.context,
    action: {
      listing: {
        setCurrent: l => {
          mkListingAction(state, () => {
            return {current: l}
          })
        },
      },
      query: {
        answerQuery: (answer) => {
          mkQueryAction(state, (prev: QueryContext) => {
            return {
              current: prev.current + 1,
              answers: prev.answers.concat([answer]),
            }
          })
        },
        goToFirst: () => {
          mkQueryAction(state, () => {
            return {
              current: 0,
              answers: [],
            }
          })
        },
        goBack: () => {
          mkQueryAction(state, (prev) => {
            return {
              current: prev.current - 1,
              answers: prev.answers.slice(0, -1)
            }
          })
        }
      },
    },
  }
}