import React from 'react'
import './App.css'
import HomePage from './components/home/HomePage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ListingDetailPage from './components/listing_detail/ListingDetailPage'
import TopBar from './components/TopBar'
import { contextFor, defaultContext, MyContext } from './models/MyContext'
import { ReactCookieProps, withCookies } from 'react-cookie'

export const appContext = React.createContext<MyContext>(defaultContext)
const Provider = appContext.Provider

export interface AppProps extends ReactCookieProps {}

class App extends React.Component<AppProps, MyContext> {
  state: MyContext = defaultContext

  componentWillMount(): void {
    this.setState(contextFor(this))
  }

  render() {
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

export default withCookies(App)
