import React from 'react'
import Hero from './Hero'
import ServiceGroupList from './ServiceGroupList'
import FeaturedServices from './FeaturedServices'
import HowItWorks from './HowItWorks'
import CustomerReview from './CustomerReview'
import CallToSignup from './CallToSignup'
import ServiceReview from './ServiceReview'
import FeatureList from './FeatureList'
import {appContext} from '../../App'

const HomePage: React.FC = () => {
  console.log('HomePage')

  const context = React.useContext(appContext)

  // whenever user go (back) to home page, reset all queries
  React.useEffect(() => {
    context.action.clearAnswers()
  })

  return (
    <div className="HomePage">
      <Hero/>
      {/*<ServiceGroupList/>*/}
      <FeaturedServices/>

      <hr/>
      <HowItWorks/>

      <hr/>
      <FeatureList/>

      <hr/>
      <CustomerReview/>

      <hr/>
      <ServiceReview/>
      <CallToSignup/>
    </div>
  )
}

export default HomePage
