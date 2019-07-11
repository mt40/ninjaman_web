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
      <div key={ sv.name } className={ `${ cls } radius_5 shadow bg_white` }>
        <DivImg url={ sv.avatar } height={ 200 }/>

        <div className="review_text">
          <p><b>{ sv.name }</b></p>
          <p><i>{ sv.job }</i></p>
          <div className='v_margin_10'>{ T(sv.review) }</div>
        </div>

      </div>
    )
  }

  const cards = [
    mkReviewCard({
      avatar: getImage('shop1', 'jpg'),
      name: 'Minh Nguyen',
      job: 'Hair Dresser',
      review: 'We gain 20% more customers last month from NinjaMan',
    }),
    mkReviewCard({
      avatar: getImage('girl3', 'jpg'),
      name: 'Elly Ly',
      job: 'Makeup Artist',
      review: 'Never worry about not having customer again',
    }),
    mkReviewCard({
      avatar: getImage('spa2', 'jpeg'),
      name: 'Spa Xuan Thu',
      job: 'Spa',
      review: 'We gain 20% more customers last month from NinjaMan',
    }),
  ]

  const reviews = () => {
    if (isMobile()) {
      return (
        <ScrollMenu data={ cards }
                    alignCenter={ false } hideSingleArrow={ true } hideArrows={ true }
                    arrowDisabledClass="is-invisible" dragging={ true } wheel={ false }/>
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
            { T('2000+ Partners') }
          </h1>
        </div>

        { reviews() }
      </Container>
    </section>
  )
}

export default ServiceReview
