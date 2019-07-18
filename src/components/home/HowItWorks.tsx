import React from 'react'
import './HowItWorks.css'
import Container from '../Container'
import { T } from '../../config/translation/util'
import DivImg from '../DivImg'
import { getImage } from '../../util/Resource'

const HowItWorks: React.FC = () => {
  const mkColumn = (img: string, title: string, text: string) => {
    return (
      <div className='column'>
        <DivImg height={ 150 } url={ img } fallbackColor={ 'transparent' } sizeContain={true}/>
        <p className='title is-4 margin_top_20'>
          { T(title) }
        </p>
        <p>
          { T(text) }
        </p>
      </div>
    )
  }

  return (
    <section className="HowItWorks section">
      <Container>
        <div className="section-title">
          <h1 className="title is-1">{ T('How it works') }</h1>
        </div>

        <div className="columns text_centered">
          {
            mkColumn(
              getImage('undraw_choose'),
              'Select services',
              'Explore our list of services and select the ones you want',
            )
          }

          {
            mkColumn(
              getImage('undraw_filling'),
              'Enter your details',
              'Choose a suitable appointment date, time, and address',
            )
          }

          {
            mkColumn(
              getImage('undraw_makeup'),
              'Our experts come to you',
              'Our experts will arrive at your address with everything needed to create your perfect look',
            )
          }
        </div>

      </Container>
    </section>
  )
}

export default HowItWorks
