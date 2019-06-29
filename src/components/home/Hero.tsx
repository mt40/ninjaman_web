import React from 'react'
import SearchBox from '../SearchBox'
import './Hero.css'
import { T } from '../../config/translation/util'

const Hero: React.FC = () => {
  return (
    <section className="TopHero hero is-info is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            { T('The best service experts in town') }
          </h1>
          <h2 className="subtitle">
            { T('Order affordable high quality services like Beauty to your home!') }
          </h2>
          <SearchBox className='margin_top_20'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
