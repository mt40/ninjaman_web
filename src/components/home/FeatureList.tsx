import React from 'react'
import Container from '../Container'
import './FeatureList.css'

const FeatureList: React.FC = () => {
  return (
    <section className="FeatureList section">
      <Container>
        <div className="section-title">
          <h1 className="title is-1">Benefits</h1>
        </div>

        <div className="columns">
          <div className="column is-4">
            <div><i className="fas fa-thumbs-up"/></div>
            <b>High Quality & Trusted Professionals</b>
            <p>
              High Quality & Trusted Professionals
              We provide only verified, background checked and high quality professionals
            </p>
          </div>

          <div className="column is-4">
            <div><i className="fas fa-user-check"/></div>
            <b>Matched to Your Needs</b>
            <p>
              We match you with the right professionals with the right budget
            </p>
          </div>

          <div className="column is-4">
            <div><i className="fas fa-shipping-fast"/></div>
            <b>Hassle Free Service Delivery</b>
            <p>
              Super convenient, guaranteed service from booking to delivery
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FeatureList
