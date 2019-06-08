import React from 'react'
import {getImage} from '../util/Resource'
import './HowItWorks.css'

const HowItWorks: React.FC = () => {
  return (
    <section className="HowItWorks section">
      <div className="how-it-works-title">
        <h1 className="title is-1">How Ninjaman Works</h1>
      </div>
      <div className="columns">
        <div className="column is-half">
          <img src={getImage('how-it-works')} alt=""/>
        </div>
        <div className="content column is-half">
          <h1 className="title is-3 has-text-warning">1. Tell Us What You Need</h1>
          First, answer a few quick questions about what type of pro you’re looking for.

          <h1 className="title is-3 has-text-warning">2. Review Free Quotes</h1>
          Within hours, you’ll receive custom quotes based on your specific needs.

          <h1 className="title is-3 has-text-warning">3. Hire The Right Pro</h1>
          Compare quotes, profiles, and reviews, then hire the pro that’s right for you.
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
