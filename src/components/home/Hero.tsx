import React from 'react'
import './Hero.css'
import { translator } from '../../config/translation/util'
import DivImg from '../DivImg'
import { getImage, isMobile } from '../../util/Resource'
import { appContext } from '../../App'

const Hero: React.FC = () => {
  const context = React.useContext(appContext)
  const T = translator(context.data.lang).T

  const subtitle = () => {
    if (isMobile()) {
      return (
        <div>
          <h2 className="text_white is-size-3 is-size-5-mobile">
            { T('We bring quality beauty services') }
          </h2>
          <h2 className="text_white is-size-3 is-size-5-mobile">
            { T('to your home') }
          </h2>
        </div>
      )
    }

    return (
      <h2 className="text_white is-size-3 is-size-5-mobile">
        { T('We bring quality beauty services to your home') }
      </h2>
    )
  }

  return (
    <section>
      <DivImg url={ getImage('massage2', 'jpg') } height='40vh' verticalCentered dimmed>
        <div className="container text_centered">
          <p className="text_white is-size-1 is-size-2-mobile v_margin_20">
            <b>{ T('Your local beauty service expert') }</b>
          </p>
          { subtitle() }
        </div>
      </DivImg>
    </section>
  )
}

export default Hero
