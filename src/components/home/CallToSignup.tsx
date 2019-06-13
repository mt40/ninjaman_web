import React from 'react'
import Container from '../Container'
import './CallToSignup.css'

const CallToSignup: React.FC = () => {
  return (
    <section className="CallToSignup section">
      <Container>
        <div className="call_to_signup_wrapper">
          <p>Are You A Professional Looking For New Customers?</p>
          <a className="button button_signup is-info is-normal">Sign Up</a>
        </div>
      </Container>
    </section>
  )
}

export default CallToSignup