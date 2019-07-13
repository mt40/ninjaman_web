import React from 'react'
import './Query0.css'
import Container from '../Container'
import { getImage } from '../../util/Resource'
import { appContext } from '../../App'
import { T } from '../../config/translation/util'
import ReactCountUp from 'react-countup'
import ReviewLabel, { ReviewRank } from '../ReviewLabel'
import _ from 'lodash'
import fakerStatic from 'faker/locale/en'

const Query0: React.FC = () => {
  const context = React.useContext(appContext)
  const service = context.data.service.get
  const query0 = service.info.queries[0]
  const answers = query0.answers['']

  const answersElems = answers.map((a, idx) => {
    const ans = () => {
      if (typeof a === 'string') return a
      return a.text
    }

    return (
      <div key={ idx }
           className="answers cursor_pointer bg_white v_margin_5 padding_10 radius_5"
           onClick={ () => onAnswerClick(ans()) }>
        <div className="columns is-mobile">
          <div className="column">{ T(ans()) }</div>
          <div className="column is-narrow">
            <i className="fas fa-chevron-right"/>
          </div>
        </div>
      </div>
    )
  })

  const onAnswerClick = (answer: string) => {
    context.action.answer(query0, answer)
  }

  const mkInstruction = (img: any, desc: any) => {
    return (
      <div className="columns is-mobile">
        <div className="column is-narrow">
          { img }
        </div>
        <div className="column">
          { desc }
        </div>
      </div>
    )
  }

  /** @deprecated */
  const bookingCounter = (
    <p className="text_white margin_top_20">
      <b><ReactCountUp start={ 2500 } end={ 3000 } delay={ 0 } duration={ 4000 } useEasing/>
      </b>
      { ' ' + T('people booked this year') }
    </p>
  )

  const leftSide = (
    <div className="column is-5">
      <div className="wrapper padding_20 radius_5">
        <h1 className="title is-4 text_white">{ query0.text }</h1>
        { answersElems }

        {/*{ bookingCounter }*/}
      </div>

      <div className="instructions padding_20 radius_5 border_solid v_margin_20">
        <h1 className="title is-5">{ T('Instructions') }</h1>
        <hr/>

        {
          mkInstruction(
            <i className="fas fa-address-book fa-fw"/>,
            <b>{ T('Choose the type of service') }</b>,
          )
        }
        {
          mkInstruction(
            <i className="fas fa-user-clock fa-fw"/>,
            <div>
              <b>{ T('Choose your time-slot') }</b>
              <p>{ T('From 10am - 5pm everyday') }</p>
            </div>,
          )
        }
        {
          mkInstruction(
            <i className="fas fa-couch fa-fw"/>,
            <b>{ T('Our expert will get in touch with you soon') }</b>,
          )
        }
      </div>
    </div>
  )

  const topServices = () => {
    const data = [
      {
        name: 'Spa Kelly',
        rank: ReviewRank.superPositive,
        reviews: 200,
        location: 'District 1, HCMC',
        image: getImage('judge_kelly'),
      },
      {
        name: 'Spa Nick Tran',
        rank: ReviewRank.superPositive,
        reviews: 190,
        location: 'District 3, HCMC',
        image: getImage('judge_nick'),
      },
      {
        name: 'Chat Luangarpa\'s World Spa',
        rank: ReviewRank.superPositive,
        reviews: 190,
        location: 'District 3, HCMC',
        image: getImage('judge_chat'),
      },
    ]

    return _.sortBy(data, [(sv) => sv.rank.id])
      .map((r, i) => {
        return (
          <div key={ i }>
            { i > 0 && <hr/> }

            <div className='columns is-mobile' key={ i }>
              <div className="column is-narrow">
                <img className="avatar" src={ r.image } alt=""/>
              </div>

              <div className="column">
                <b className='is_text_3'>{ r.name }</b>
                <p>{ r.location }</p>
                <ReviewLabel rank={ r.rank } reviewCount={ r.reviews }/>
              </div>
            </div>
          </div>
        )
      })
  }

  /** @deprecated: we don't have enough top services to show right now */
  const rightSide = (
    <div className="column">
      <div className="padding_20 radius_5 border_solid">
        <h1 className="title is-5">{ T('Our partners in Ho Chi Minh City') }</h1>
        {/*<p>{ T('All services are certified by us') }</p>*/ }

        <hr/>

        <div>
          { topServices() }
        </div>
      </div>
    </div>
  )

  return (
    <section className="ListingDetailQuery0">
      <Container>
        <div className="columns v_margin_20">
          { leftSide }
        </div>
      </Container>
    </section>
  )
}

export default Query0
