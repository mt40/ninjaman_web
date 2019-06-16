import React from 'react'
import {appContext} from '../../App'
import './Hero.css'
import Container from '../Container'

const Hero: React.FC = () => {
  const context = React.useContext(appContext)

  // Can safely get current service here since empty case is already
  // handled earlier in `ListingDetailPage`.
  const service = context.data.service.get

  const features = context.data.service.get.info.features.map((f, idx) => {
    return <li key={idx}>{f}</li>
  })

  // todo: make features dynamic
  return (
    <section className="ListingDetailHero hero is-info is-medium">
      <div className="hero-body">
        <Container>
          <h1 className="title">
            Best {service.info.name} in Ho Chi Minh City
          </h1>
          <h2 className="subtitle content">
            <ul>
              {features}
            </ul>
          </h2>
        </Container>
      </div>
    </section>
  )
}

export default Hero
