import React, { CSSProperties } from 'react'
import Container from '../Container'
import './CallToSignup.css'
import { translator } from '../../config/translation/util'
import { isMobile } from '../../util/Resource'
import { appContext } from '../../App'

const CallToSignup: React.FC = () => {
  const context = React.useContext(appContext)
  const T = translator(context.data.lang).T

  const style = (): CSSProperties => {
    if (isMobile()) {
      return {
        textAlign: 'center',
      }
    }
    return {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }

  return (
    <section className="CallToSignup section">
      <Container>
        <div className="call_to_signup_wrapper" style={ style() }>
          <p>{ T('Are You A Beauty Professional Looking To Increase Revenue?') }</p>
          <a className="button button_signup is-info is-normal"
             href='https://docs.google.com/forms/d/e/1FAIpQLSciWgG_DG-GdBnOhLaaV0URVD31PWZEg4RSLAcpz_1Ibf2AQQ/viewform'
             style={ {
               minWidth: 'auto',
               marginLeft: isMobile() ? 0 : '40px',
               marginTop: isMobile() ? '10px' : 0,
             } }>
            { T('Sign Up') }
          </a>
        </div>
      </Container>
    </section>
  )
}

export default CallToSignup
