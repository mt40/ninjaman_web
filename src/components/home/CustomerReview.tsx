import React from 'react'
import { getImage, isMobile } from '../../util/Resource'
import './CustomerReview.css'
import Container from '../Container'
import { T } from '../../config/translation/util'
import DivImg from '../DivImg'
import ScrollMenu from 'react-horizontal-scrolling-menu'

interface UserInfo {
  avatar: string,
  name: string
}

const CustomerReview: React.FC = () => {
  const mkReviewCard = (cover: string, text: string, pro: UserInfo) => {
    const cls = isMobile() ? 'review_card_mobile' : 'review_card'

    return (
      <div className={ `${ cls } radius_5 shadow bg_white` }>
        <DivImg url={ cover } height={ 200 }/>

        <div className="review_text">
          <p>{ T(text) }</p>
        </div>


        <div className="review_user_info">
          <hr/>
          <div className="columns is-1 is-mobile">
            <div className="column is-narrow">
              <img className="avatar" src={ pro.avatar } alt=""/>
            </div>
            <div className="column h_margin">
              <p>{ T('THE PRO') }</p>
              <p>{ pro.name }</p>
            </div>
          </div>
        </div>

      </div>
    )
  }

  const cards = [
    mkReviewCard(
      getImage('pro1', 'jpg'),
      'Hired #stockblockframes as wedding photographer…Great resource through #NinjaMan',
      {avatar: getImage('how-it-works'), name: 'Sam Shin'},
    ),
    mkReviewCard(
      getImage('pro1', 'jpg'),
      'Hired #stockblockframes as wedding photographer…Great resource through #NinjaMan',
      {avatar: getImage('how-it-works'), name: 'Sam Shin'},
    ),
    mkReviewCard(
      getImage('pro1', 'jpg'),
      'Hired #stockblockframes as wedding photographer…Great resource through #NinjaMan',
      {avatar: getImage('how-it-works'), name: 'Sam Shin'},
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
            { T('Customer Reviews') }
          </h1>
        </div>

        { reviews() }

      </Container>
    </section>
  )
}

export default CustomerReview
