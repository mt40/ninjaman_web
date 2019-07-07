import React from 'react'
import './App.css'
import HomePage from './components/home/HomePage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ListingDetailPage from './components/listing_detail/ListingDetailPage'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import * as _ from 'lodash'
import { none, Option, some } from 'ts-option'
import { ServiceContext } from './context/service'
import { groupOf, QueryInfo, ServiceInfo } from './config/services'
import { Cart } from './models/Cart'
import { MyContext } from './models/MyContext'
import { QueryAnswer } from './models/QueryAnswer'

// export const appContext = React.createContext<AppContext>(defaultContext)
// const Provider = appContext.Provider

export const appContext = React.createContext<MyContext>({
  data: {
    query: {
      answers: [] as QueryAnswer[],
    },
    service: none as Option<ServiceContext>,
    cart: new Cart(),
  },
  action: {
    answer: () => {},
    popAnswer: () => {},
    clearAnswers: () => {},
    getNextQuery: () => none,
    setService: () => {},
    setCart: () => {},
    clearCart: () => {},
  },
})
const Provider = appContext.Provider

type Props = {}

class App extends React.Component<Props, MyContext> {
  state: MyContext = {
    data: {
      query: {
        answers: [],
      },
      service: none,
      cart: new Cart(),
    },
    action: {
      answer: (query: QueryInfo, ...answers: string[]) => {
        const newState = {
          ...this.state,
          data: {
            ...this.state.data,
            query: {
              answers: this.state.data.query.answers.concat(
                answers.map(a => {
                  return { query: query, get: a }
                })
              ),
            },
          },
        }
        if (!_.isEqual(newState.data, this.state.data)) {
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
            cart: new Cart(),
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
            cart: new Cart(),
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
      setCart: (lastAns: string, count: number) => {
        const chain = this.state.data.query.answers.map(a => a.get).concat([lastAns])
        const newState = {
          ...this.state,
          data: {
            ...this.state.data,
            cart: this.state.data.cart.set(chain, count),
          },
        }
        if (!_.isEqual(newState.data, this.state.data)) {
          this.setState(newState)
        }
      },
      clearCart: () => {
        const newState = {
          ...this.state,
          data: {
            ...this.state.data,
            cart: new Cart(),
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
      <Provider value={ this.state }>
        <BrowserRouter>
          <div className="App">
            <TopBar/>

            <div className="page_content">
              <Switch>
                <Route path="/" exact component={ HomePage }/>
                <Route path="/service/:name" component={ ListingDetailPage }/>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
