import React from 'react'
import Hero from './Hero'
import useRouter from 'use-react-router'
import {appContext} from '../../App'
import Query0 from './Query0'
import './ListingDetailPage.css'
import Container from '../Container'
import QueryN from './QueryN'
import {ServiceGroup, ServiceInfo} from '../../config/services'
import UserInfoForm from './UserInfoForm'
import {Route, Switch} from 'react-router'
import Checkout from './Checkout'
import * as Page from '../../context/navigation'
import {Link} from 'react-router-dom'
import {Elements, StripeProvider} from 'react-stripe-elements'

const ListingDetailPage: React.FC = () => {
  console.log('ListingDetailPage')

  const context = React.useContext(appContext)
  const {history, match} = useRouter()

  return context.data.service.match({
    none: () => {
      history.replace('/')
      return null
    },
    some: sv => {
      return render(sv.group, sv.info)
    },
  })

  function render(group: ServiceGroup, service: ServiceInfo) {
    // todo: move to left side
    const allAnswers = () => {
      const items = context.data.query.answers.map((a, idx) => {
        return (
          <li key={idx}>- {a}</li>
        )
      })
      return <ul className="all_answers">{items}</ul>
    }

    const deepQueryWrapper = (queryElem: any) => {
      const title = `${group.name} > ${service.name}`

      const topBar = (
        <div>
          <div className="columns margin_top_20">
            <div className="column is-narrow">
              <p><b>{title}</b></p>
            </div>

            <div className="column"/>

            <div className="column is-narrow">
              <div className="cursor_pointer" onClick={deepQueryCloseBtnClick}>
                <i className="fas fa-times"/>
              </div>
            </div>
          </div>

          <hr/>
        </div>
      )

      return (
        <div className="deep_query_wrapper padding_btm_80">
          <Container>
            {topBar}

            <div className="columns">
              <div className="column is-3">
                {allAnswers()}
              </div>
              <div className="column">
                {queryElem}
              </div>
            </div>
          </Container>
        </div>
      )
    }

    const deepQueryCloseBtnClick = () => {
      context.action.query.goToFirst()
    }

    const renderQuery = () => {
      const cur = context.data.query.current
      if (cur === 0) return (
        <div>
          <Hero/>
          <Query0/>
        </div>
      )
      else {
        const prevQuery = context.data.service.get.info.queries[cur - 1]
        if (prevQuery.isFinal) {
          return <UserInfoForm/>
        }
        return deepQueryWrapper(<QueryN/>)
      }
    }

    const checkout = (
      <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
        <Elements>
          <Checkout/>
        </Elements>
      </StripeProvider>
    )

    // todo: use router for query id
    return (
      <div className="ListingDetailPage">
        <Switch>
          <Route exact path={Page.checkout.path} render={() => checkout}/>
          <Route path={Page.serviceDetail.path} render={() => renderQuery()}/>
        </Switch>
      </div>
    )
  }
}

export default ListingDetailPage
