import React from 'react'
import './App.css'
import TopBar from './components/TopBar'
import TopHero from './components/TopHero'
import ServiceGroupList from './components/ServiceGroupList'
import FeaturedServices from './components/FeaturedServices'
import HowItWorks from './components/HowItWorks'
import CustomerReview from './components/CustomerReview'
import CallToSignup from './components/CallToSignup'
import ServiceReview from './components/ServiceReview'
import FeatureList from './components/FeatureList'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <div className="App">
      <TopBar/>
      <TopHero/>
      <ServiceGroupList/>
      <FeaturedServices/>

      <hr/>
      <HowItWorks/>

      <hr/>
      <CustomerReview/>

      <hr/>
      <ServiceReview/>
      <CallToSignup/>

      <hr/>
      <FeatureList/>

      <Footer/>
    </div>
  )
}

export default App
