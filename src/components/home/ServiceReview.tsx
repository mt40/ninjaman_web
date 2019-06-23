import React from 'react'
import { getImage } from '../../util/Resource'
import './CustomerReview.css'
import './ServiceReview.css'
import Container from '../Container'
import { T } from '../../config/translation/util'

interface ServiceInfo {
  avatar: string,
  name: string,
  job: string,
  review: string
}

const ServiceReview: React.FC = () => {
  const mkReviewCard = (sv: ServiceInfo) => {
    return (
      <div className="review_card service_review_card">
        <div className="">
          <img className="avatar" src={ sv.avatar } alt=""/>
        </div>

        <div className="">
          <b>{ T(sv.name) }</b>
          <p>{ T(sv.job) }</p>
        </div>

        <hr/>

        <p>{ T(sv.review) }</p>
      </div>
    )
  }

  const info = {
    avatar: getImage('pro2', 'jpeg'),
    name: 'Todd Howard',
    job: 'Wedding Singer',
    review: 'From earning 10K a month to being totally booked from November till February -- My UrbanClap Journey.',
  }

  const cards = (
    <div className="columns">
      <div className="column is-4">
        { mkReviewCard(info) }
      </div>

      <div className="column is-4">
        { mkReviewCard(info) }
      </div>

      <div className="column is-4">
        { mkReviewCard(info) }
      </div>
    </div>
  )

  return (
    <section className="ServiceReview section">
      <Container>
        <div className="section-title">
          <h1 className="title is-1">
            { T('Thousands Of Professionals Are Growing Their Businesses With Ninjaman') }
          </h1>
        </div>

        { cards }
      </Container>
    </section>
  )
}

export default ServiceReview
