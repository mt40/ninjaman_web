import React from 'react'
import './HowItWorks.css'
import Container from '../Container'
import { T } from '../../config/translation/util'

const HowItWorks: React.FC = () => {
  const mkTitleColumn = (text: string) => {
    return (
      <div className="column">
        <h1 className="title is-3">{ T(text) }</h1>
      </div>
    )
  }

  const mkColumn = (text: string) => {
    return <div className="column">{ T(text) }</div>
  }

  return (
    <section className="HowItWorks section">
      <Container>
        <div className="section-title">
          <h1 className="title is-1">{ T('How NinjaMan works') }</h1>
        </div>

        <div className="columns text_centered">
          { mkTitleColumn('Select services') }
          { mkTitleColumn('Enter your details') }
          { mkTitleColumn('Beautician comes to you') }
        </div>

        <div className="columns text_centered">
          { mkColumn('Explore our list of services and select the ones you want') }
          { mkColumn('Choose appointment date, time, and address then check out securely') }
          { mkColumn(
            'Our stylists arrive at your home with everything needed to create your\n' +
            'perfect look',
          ) }
        </div>

      </Container>
    </section>
  )
}

export default HowItWorks
