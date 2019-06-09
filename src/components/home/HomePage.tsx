import React from 'react'
import Hero from './Hero'
import ServiceGroupList from './ServiceGroupList'
import FeaturedServices from './FeaturedServices'
import HowItWorks from './HowItWorks'
import CustomerReview from './CustomerReview'
import CallToSignup from './CallToSignup'
import ServiceReview from './ServiceReview'
import FeatureList from './FeatureList'
import Footer from '../Footer'

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <Hero/>
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

export default HomePage
