import React from 'react'
import { getImage, isMobile } from '../../util/Resource'
import './CustomerReview.css'
import Container from '../Container'
import { T } from '../../config/translation/util'
import DivImg from '../DivImg'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import ReactCountUp from 'react-countup'

interface UserInfo {
  avatar: string,
  name: string,
  booked: string
}

const CustomerReview: React.FC = () => {
  const mkReviewCard = (cover: string, text: string, user: UserInfo) => {
    const cls = isMobile() ? 'review_card_mobile' : 'review_card'

    return (
      <div key={ user.name } className={ `${ cls } radius_5 shadow bg_white` }>
        <DivImg url={ cover } height={ 200 }/>

        <div className="review_text">
          <p>{ T(text) }</p>
        </div>


        <div className="review_user_info">
          <hr/>
          <div className="columns is-1 is-mobile">
            <div className="column is-narrow">
              <img className="avatar" src={ user.avatar } alt=""/>
            </div>
            <div className="column h_margin">
              <p>{ user.name }</p>
              <p>{ T(`Booked ${ user.booked }`) }</p>
            </div>
          </div>
        </div>

      </div>
    )
  }

  const cards = [
    mkReviewCard(
      getImage('two_girls', 'jpg'),
      'Had a great makeup before the party with my bff',
      {avatar: getImage('girl2', 'jpg'), name: 'Ha Tran', booked: 'Makeup'},
    ),
    mkReviewCard(
      getImage('wedding1', 'jpg'),
      'Super happy with my wedding photos from #NinjaMan',
      {avatar: getImage('girl1', 'jpg'), name: 'Tam Nguyen', booked: 'Photography'},
    ),
    mkReviewCard(
      getImage('massage1', 'jpg'),
      'I book a massage every weekend since I know NinjaMan',
      {avatar: getImage('boy1', 'jpg'), name: 'Minh Tri', booked: 'Massage'},
    ),
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
    <section className="CustomerReview section">
      <Container>
        <div className="section-title">
          <h1 className="title is-1">
            <ReactCountUp start={ 4000 } end={ 5000 } delay={ 0 } duration={ 2000 } useEasing/>
            <p>{ T('Successful Bookings') }</p>
          </h1>
        </div>

        { reviews() }

      </Container>
    </section>
  )
}

export default CustomerReview
