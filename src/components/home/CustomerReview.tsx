import React from 'react'
import {getImage} from '../../util/Resource'
import './CustomerReview.css'
import Container from '../Container'
import {T} from '../../config/translation/util'

interface UserInfo {
  avatar: string,
  name: string
}

const CustomerReview: React.FC = () => {
  const mkReviewCard = (cover: string, text: string, pro: UserInfo) => {
    return (
      <div className="review_card radius_5 shadow bg_white">
        <div>
          <img src={cover} alt=""/>
        </div>

        <div className="review_text">
          <p>{T(text)}</p>
        </div>


        <div className="review_user_info">
          <hr/>
          <div className="columns is-1">
            <div className="column is-narrow">
              <img className="avatar" src={pro.avatar} alt=""/>
            </div>
            <div className="column h_margin">
              <p>{T('THE PRO')}</p>
              <p>{pro.name}</p>
            </div>
          </div>
        </div>

      </div>
    )
  }

  const cards = (
    <div className="columns">
      <div className="column is-4">
        {mkReviewCard(
          getImage('pro1', 'jpg'),
          'Hired #stockblockframes as wedding photographer…Great resource through #NinjaMan',
          {avatar: getImage('how-it-works'), name: 'Sam Shin'},
        )}
      </div>

      <div className="column is-4">
        {mkReviewCard(
          getImage('pro1', 'jpg'),
          'Hired #stockblockframes as wedding photographer…Great resource through #NinjaMan',
          {avatar: getImage('how-it-works'), name: 'Sam Shin'},
        )}
      </div>

      <div className="column is-4">
        {mkReviewCard(
          getImage('pro1', 'jpg'),
          'Hired #stockblockframes as wedding photographer…Great resource through #NinjaMan',
          {avatar: getImage('how-it-works'), name: 'Sam Shin'},
        )}
      </div>
    </div>
  )

  return (
    <section className="CustomerReview section">
      <Container>
        <div className="section-title">
          <h1 className="title is-1">
            {T('Customer Reviews')}
          </h1>
        </div>

        {cards}

      </Container>
    </section>
  )
}

export default CustomerReview
