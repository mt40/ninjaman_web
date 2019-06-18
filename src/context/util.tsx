import {QueryContext} from './query'
import {AppContext, AppContextAsState} from './AppContext'
import {Option} from 'ts-option'
import {groupOf, services} from '../config/services'
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
              info: l,
            }
          })
        },
      },
      query: {
        answerQuery: (answer) => {
          mkQueryAction(state, prev => {
            return {
              ...prev,
              current: prev.current + 1,
              answers: prev.answers.concat([answer]),
            }
          })
        },
        goToFirst: () => {
          mkQueryAction(state, prev => {
            return {
              ...prev,
              current: 0,
              answers: [],
            }
          })
        },
        goBack: (removeLastAnswer: boolean) => {
          mkQueryAction(state, (prev) => {
            const newCurrent = removeLastAnswer ? prev.current - 1 : prev.current
            return {
              ...prev,
              current: newCurrent,
              answers: prev.answers.slice(0, -1),
            }
          })
        },
        toggleUserInfoForm: () => {
          mkQueryAction(state, prev => {
            return {
              ...prev,
              showUserInfoForm: !prev.showUserInfoForm,
            }
          })
        },
      },
    },
  }
}