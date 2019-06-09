import React from 'react'
import './Query1.css'
import Container from '../Container'
import {getImage} from '../../util/Resource'

const Query1: React.FC = () => {
  const answers = [
    'Repair toilet',
    'Repair kitchen sink',
    'Other',
  ]

  const answersElems = answers.map((a, idx) => {
    return (
      <div key={idx} className="answers bg_white v_margin_5 padding_10 radius_5">
        <div className="columns">
          <div className="column">{a}</div>
          <div className="column is-narrow">
            <i className="fas fa-chevron-right"/>
          </div>
        </div>
      </div>
    )
  })

  const mkInstruction = (img: any, desc: any) => {
    return (
      <div className="columns">
        <div className="column is-narrow">
          {img}
        </div>
        <div className="column">
          {desc}
        </div>
      </div>
    )
  }

  const leftSide = (
    <div className="column is-5">
      <div className="wrapper padding_20 radius_5 border_solid">
        <h1 className="title is-4 text_white">Need a plumber for:</h1>
        {answersElems}
        <p className="text_white margin_top_20"><b>9999</b> people book this last year</p>
      </div>

      <div className="instructions padding_20 radius_5 border_solid v_margin_20">
        <h1 className="title is-5">Instructions</h1>
        <hr/>

        {
          mkInstruction(
            <i className="fas fa-address-book fa-fw"/>,
            <b>Choose the type of service</b>,
          )
        }
        {
          mkInstruction(
            <i className="fas fa-user-clock fa-fw"/>,
            <div>
              <b>Choose your time-slot</b>
              <p>From 9am - 9pm everyday</p>
            </div>,
          )
        }
        {
          mkInstruction(
            <i className="fas fa-couch fa-fw"/>,
            <b>Our professional will get in touch with you soon</b>,
          )
        }
      </div>
    </div>
  )

  const topServices = Array.from(Array(10).keys()).map(i => {
    return (
      <div>
        {i > 0 ? <hr/> : null}

        <div className="columns" key={i}>
          <div className="column is-narrow">
            <img className="avatar" src={getImage('pro2', 'jpeg')} alt=""/>
          </div>

          <div className="column">
            <b>Thomas Muller</b>
            <p>Cu Chi, Ho Chi Minh</p>
            <p>★5 (170 reviews)</p>
          </div>
        </div>
      </div>
    )
  })

  const rightSide = (
    <div className="column">
      <div className="padding_20 radius_5 border_solid">
        <h1 className="title is-5">Plumbers in Ho Chi Minh City</h1>
        <p>
          We went out to find the most professional services in the city.
          These plumbers are trusted by many customers to provide a great service
          and get the job done.
        </p>

        <hr/>

        <div>
          {topServices}
        </div>
      </div>
    </div>
  )

  return (
    <section className="ListingDetailQuery1">
      <Container>
        <div className="columns v_margin_20">
          {leftSide}
          {rightSide}
        </div>
      </Container>
    </section>
  )
}

export default Query1
