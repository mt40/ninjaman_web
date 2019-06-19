import React from 'react'
import './App.css'
import HomePage from './components/home/HomePage'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ListingDetailPage from './components/listing_detail/ListingDetailPage'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import * as _ from 'lodash'
import {none, Option, some} from 'ts-option'
import {ServiceContext} from './context/service'
import {groupOf, QueryInfo, ServiceInfo} from './config/services'

// export const appContext = React.createContext<AppContext>(defaultContext)
// const Provider = appContext.Provider

export interface QueryAnswer {
  query: QueryInfo,
  get: string,
}

interface MyContext {
  data: {
    query: {
      answers: QueryAnswer[]
    },
    service: Option<ServiceContext>
  },
  action: {
    answer: (query: QueryInfo, answer: string) => void,
    popAnswer: () => void,
    clearAnswers: () => void,
    getNextQuery: () => Option<QueryInfo>,
    setService: (sv: ServiceInfo) => void
  }
}

export const appContext = React.createContext<MyContext>({
  data: {
    query: {
      answers: [] as QueryAnswer[],
    },
    service: none as Option<ServiceContext>,
  },
  action: {
    answer: () => {},
    popAnswer: () => {},
    clearAnswers: () => {},
    getNextQuery: () => none,
    setService: () => {},
  },
})
const Provider = appContext.Provider

type Props = {}

class App extends React.Component<Props, MyContext> {
  // const [state, setState] = React.useState<AppContext>(defaultContext)
  // const context: AppContext = contextFor(new AppContextAsState(state, setState))

  // console.log('app', context) // REMOVE
  state: MyContext = {
    data: {
      query: {
        answers: [],
      },
      service: none,
    },
    action: {
      answer: (query: QueryInfo, answer: string) => {
        const newState = {
          ...this.state,
          data: {
            ...this.state.data,
            query: {
              answers: this.state.data.query.answers.concat({
                query: query,
                get: answer,
              }),
            },
          },
        }
        if (!_.isEqual(newState.data, this.state.data)) {
          console.log('Set new state', newState) // REMOVE
          this.setState(newState)
        }
      },
      popAnswer: () => {
        const newState = {
          ...this.state,
          data: {
            ...this.state.data,
            query: {
              answers: _.dropRight(this.state.data.query.answers),
            },
          },
        }
        if (!_.isEqual(newState.data, this.state.data)) {
          this.setState(newState)
        }
      },
      clearAnswers: () => {
        const newState = {
          ...this.state,
          data: {
            ...this.state.data,
            query: {
              answers: [],
            },
          },
        }
        if (!_.isEqual(newState.data, this.state.data)) {
          this.setState(newState)
        }
      },
      getNextQuery: (): Option<QueryInfo> => {
        const next = this.state.data.query.answers.length
        return this.state.data.service.map((sv: ServiceContext) => {
          return sv.info.queries[next]
        })
      },
      setService: (sv: ServiceInfo) => {
        const newState = {
          ...this.state,
          data: {
            ...this.state.data,
            service: some({
              group: groupOf(sv),
              info: sv,
            }),
          },
        }
        if (!_.isEqual(newState.data, this.state.data)) {
          this.setState(newState)
        }
      },
    },
  }

  render() {
    console.log('app', appContext) // REMOVE

    return (
      <Provider value={this.state}>
        <BrowserRouter>
          <div className="App">
            <TopBar/>

            <div className="page_content">
              <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/service/:name" component={ListingDetailPage}/>
              </Switch>
            </div>

            <Footer/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
