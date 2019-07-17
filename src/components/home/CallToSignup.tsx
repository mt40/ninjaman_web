import React, { CSSProperties } from 'react'
import Container from '../Container'
import './CallToSignup.css'
import { T } from '../../config/translation/util'
import { isMobile } from '../../util/Resource'

const CallToSignup: React.FC = () => {
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
          <p>{ T('Are You A Professional Looking For New Customers?') }</p>
          <a className="button button_signup is-info is-normal"
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
