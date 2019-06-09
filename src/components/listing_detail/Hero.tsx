import React from 'react'
import {appContext} from '../../App'
import './Hero.css'
import Container from '../Container'

const Hero: React.FC = () => {
  const context = React.useContext(appContext)

  // Can safely get current listing here since empty case is already
  // handled earlier in `ListingDetailPage`.
  const listing = context.state.current.listing.get

  return (
    <section className="ListingDetailHero hero is-info is-medium">
      <div className="hero-body">
        <Container>
          <h1 className="title">
            Best {listing.name} in Ho Chi Minh City
          </h1>
          <h2 className="subtitle content">
            <ul>
              <li>At your door within 90 minutes</li>
              <li>30 days post service guarantee</li>
              <li>No joking around :)</li>
            </ul>
          </h2>
        </Container>
      </div>
    </section>
  )
}

export default Hero
