import React from 'react'
import { getImage, isMobile } from '../../util/Resource'
import './CustomerReview.css'
import './ServiceReview.css'
import Container from '../Container'
import { T } from '../../config/translation/util'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import DivImg from '../DivImg'

interface ServiceInfo {
  avatar: string,
  name: string,
  job: string,
  review: string
}

const ServiceReview: React.FC = () => {
  const mkReviewCard = (sv: ServiceInfo) => {
    const cls = isMobile() ? 'service_review_card_mobile' : 'service_review_card'

    return (
      <div className={ `${ cls } radius_5 shadow bg_white` }>
        <DivImg url={ sv.avatar } height={ 200 }/>

        <div className="review_text">
          <p><b>{ sv.name }</b></p>
          <p>{ sv.job }</p>
          <div>{ T(sv.review) }</div>
        </div>

      </div>
    )
  }

  const cards = [
    mkReviewCard({
      avatar: getImage('pro2', 'jpeg'),
      name: 'Todd Howard',
      job: 'Wedding Singer',
      review: 'From earning 10K a month to being totally booked from November till February',
    }),
    mkReviewCard({
      avatar: getImage('pro2', 'jpeg'),
      name: 'Todd Howard',
      job: 'Wedding Singer',
      review: 'From earning 10K a month to being totally booked from November till February',
    }),
    mkReviewCard({
      avatar: getImage('pro2', 'jpeg'),
      name: 'Todd Howard',
      job: 'Wedding Singer',
      review: 'From earning 10K a month to being totally booked from November till February',
    }),
  ]

  const reviews = () => {
    if (isMobile()) {
      return (
        <ScrollMenu data={ cards }
                    alignCenter={ false } hideSingleArrow={ true } hideArrows={ true }
                    arrowDisabledClass="is-invisible" dragging={ true } wheel={ true }/>
      )
    }
    else {
      return (
        <div className="columns">
          {
            cards.map((c, i) => {
              return <div className='column' key={ i }>{ c }</div>
            })
          }
        </div>
      )
    }
  }

  return (
    <section className='ServiceReview section'>
      <Container>
        <div className="section-title">
          <h1 className="title is-1">
            { T('Thousands Of Professionals Are Growing Their Businesses With Ninjaman') }
          </h1>
        </div>

        { reviews() }
      </Container>
    </section>
  )
}

export default ServiceReview
