import React from 'react'
import './App.css'
import HomePage from './components/home/HomePage'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ListingDetailPage from './components/listing_detail/ListingDetailPage'
import TopBar from './components/TopBar'
import Footer from './components/Footer'
import {AppContext, AppContextAsState, defaultContext} from './context/AppContext'
import {contextFor} from './context/util'

export const appContext = React.createContext<AppContext>(defaultContext)
const Provider = appContext.Provider

const App: React.FC = () => {
  const [state, setState] = React.useState<AppContext>(defaultContext)
  const context: AppContext = contextFor(new AppContextAsState(state, setState))

  console.log('app', context) // REMOVE

  return (
    <Provider value={context}>
      <BrowserRouter>
        <div className="App">
          <TopBar/>

          <div className="page_content">
            <Switch>
              <Route path="/" exact={true} component={HomePage}/>
              <Route path="/service/:name" component={ListingDetailPage}/>
            </Switch>
          </div>

          <Footer/>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
