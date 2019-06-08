import React from 'react'
import logo from './logo.svg'
import './App.css'
import TopBar from './components/TopBar'
import TopHero from './components/TopHero'
import ServiceGroupList from './components/ServiceGroupList'
import FeaturedServices from './components/FeaturedServices'
import HowItWorks from './components/HowItWorks'

const App: React.FC = () => {
  return (
    <div className="App">
      <TopBar/>
      <TopHero/>
      <ServiceGroupList/>
      <FeaturedServices/>
      <hr/>
      <HowItWorks/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
