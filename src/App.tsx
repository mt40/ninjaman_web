import React from 'react'
import './App.css'
import HomePage from './components/home/HomePage'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ListingDetailPage from './components/listing_detail/ListingDetailPage'
import TopBar from './components/TopBar'
import {Listing} from './models/Listing'
import {none, Option, some} from 'ts-option'

export interface AppState {
  current: {
    listing: Option<Listing>
  }
}

const defaultState: AppState = {
  current: {
    listing: none,
  },
}

export interface AppContext {
  state: AppState,
  actions: {
    setListing: (l: Listing) => void
  }
}

// ATTENTION: context must be set properly later
const defaultContext: AppContext = {
  state: defaultState,
  actions: {
    setListing: () => {
    },
  },
}

export const appContext = React.createContext<AppContext>(defaultContext)
const Provider = appContext.Provider

const App: React.FC = () => {
  const [state, setState] = React.useState<AppState>(defaultState)

  const context: AppContext = {
    state: state,
    actions: {
      setListing: l => {
        setState({
            current: {
              ...state.current,
              listing: some(l),
            },
          },
        )
      },
    },
  }

  return (
    <Provider value={context}>
      <BrowserRouter>
        <div className="App">
          <TopBar/>

          <Switch>
            <Route path="/" exact={true} component={HomePage}/>
            <Route path="/service/:name" component={ListingDetailPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
