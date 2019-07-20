import React from 'react'
import SearchBox from '../SearchBox'
import './Hero.css'
import { T } from '../../config/translation/util'
import DivImg from '../DivImg'
import { getImage } from '../../util/Resource'

const Hero: React.FC = () => {
  return (
    <section>
      <DivImg url={ getImage('massage2', 'jpg') } height='40vh' verticalCentered dimmed>
        <div className="container text_centered">
          <p className="text_white is-size-1 is-size-2-mobile v_margin_20">
            <b>{ T('Your beauty service expert in Ho Chi Minh city') }</b>
          </p>
          <h2 className="text_white is-size-3 is-size-5-mobile">
            { T('We bring quality beauty services to your home') }
          </h2>
        </div>
      </DivImg>
    </section>
  )
}

export default Hero
