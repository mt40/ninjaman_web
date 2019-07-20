import React from 'react'
import { appContext } from '../../App'
import './Hero.css'
import Container from '../Container'
import { translator } from '../../config/translation/util'

const Hero: React.FC = () => {
  const context = React.useContext(appContext)
  const T = translator(context.data.lang).T

  // Can safely get current service here since empty case is already
  // handled earlier in `ListingDetailPage`.
  const service = context.data.service.get

  const features = context.data.service.get.info.features.map((f, idx) => {
    return <li key={ idx }>{ T(f) }</li>
  })

  // todo: make features dynamic
  return (
    <section className="ListingDetailHero hero is-info is-medium"
             style={ {
               background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${ service.info.image }') center/cover no-repeat border-box`,
             } }>
      <div className="hero-body">
        <Container>
          <h1 className="title">
            Best { service.info.name } in HCMC
          </h1>
          <h2 className="subtitle content">
            <ul>
              { features }
            </ul>
          </h2>
        </Container>
      </div>
    </section>
  )
}

export default Hero
