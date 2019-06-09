import React from 'react'
import SearchBox from '../SearchBox'
import './Hero.css'

const Hero: React.FC = () => {
  return (
    <section className="TopHero hero is-info is-medium">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Consider It Done
          </h1>
          <h2 className="subtitle">
            We bring you the right PROs for every project on your list
          </h2>
          <SearchBox/>
        </div>
      </div>
    </section>
  )
}

export default Hero
