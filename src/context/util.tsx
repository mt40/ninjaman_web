import {QueryContext} from './query'
import {AppContext, AppContextAsState} from './AppContext'
import {Option} from 'ts-option'
import {groupOf} from '../config/services'
import {ServiceContext} from './service'

function mkServiceAction(
  state: AppContextAsState,
  f: (prevState: Option<ServiceContext>) => ServiceContext,
): void {
  const newContext = f(state.context.data.service)
  state.setServiceContext(newContext)
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
      service: {
        setCurrent: l => {
          mkServiceAction(state, () => {
            return {
              group: groupOf(l),
              info: l
            }
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