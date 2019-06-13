import React from 'react'
import Hero from './Hero'
import useRouter from 'use-react-router'
import {appContext} from '../../App'
import Query0 from './Query0'
import Query1 from './Query1'
import './ListingDetailPage.css'
import Container from '../Container'
import Query2 from './Query2'

const ListingDetailPage: React.FC = () => {
  const context = React.useContext(appContext)
  const {history} = useRouter()

  if (context.data.listing.isEmpty) {
    history.replace('/')
    return null
  } else {
    const allAnswers = () => {
      const items = context.data.query.answers.map((a, idx) => {
        return (
          <li key={idx}>- {a}</li>
        )
      })
      return <ul className="all_answers">{items}</ul>
    }

    const deepQueryWrapper = (queryElem: any) => {
      const topBar = (
        <Container>
          <div className="columns margin_top_20">
            <div className="column is-narrow">
              <p><b>Appliance Repair > Air Conditioner</b></p>
              {allAnswers()}
            </div>

            <div className="column"/>

            <div className="column is-narrow">
              <div className="cursor_pointer" onClick={deepQueryCloseBtnClick}>
                <i className="fas fa-times"/>
              </div>
            </div>
          </div>

          <hr/>
        </Container>
      )

      return (
        <div className="deep_query_wrapper">
          {topBar}
          {queryElem}
        </div>
      )
    }

    const deepQueryCloseBtnClick = () => {
      context.action.query.goToFirst()
    }

    const renderQuery = () => {
      switch (context.data.query.current) {
        case 0:
          return null
        case 1:
          return deepQueryWrapper(<Query1/>)
        case 2:
          return deepQueryWrapper(<Query2/>)
      }
    }

    return (
      <div className="ListingDetailPage">
        <Hero/>
        <Query0/>
        {renderQuery()}
      </div>
    )
  }
}

export default ListingDetailPage
