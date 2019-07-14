import React from 'react'
import Hero from './Hero'
import useRouter from 'use-react-router'
import { appContext } from '../../App'
import Query0 from './Query0'
import './ListingDetailPage.css'
import Container from '../Container'
import QueryN from './QueryN'
import { ServiceGroup, ServiceInfo } from '../../config/services'
import UserInfoForm from './UserInfoForm'
import { Route, Switch } from 'react-router'
import Checkout from './Checkout'
import * as Page from '../../context/navigation'
import { Elements, StripeProvider } from 'react-stripe-elements'
import * as _ from 'lodash'
import { T } from '../../config/translation/util'
import BookingConfirm from './BookingConfirm'
import { isMobile } from '../../util/Resource'

const ListingDetailPage: React.FC = () => {
  console.log('ListingDetailPage')

  const context = React.useContext(appContext)
  const {history} = useRouter()

  return context.data.service.match({
    none: () => {
      history.replace(Page.home.path)
      return null
    },
    some: sv => {
      return main(sv.group, sv.info)
    },
  })

  function main(group: ServiceGroup, service: ServiceInfo) {
    const allAnswers = () => {
      const items = context.data.query.answers.map((a, idx) => {
        return <li key={ idx }>⦁ { T(a.get) }</li>
      })
      return <ul className="all_answers">{ items }</ul>
    }

    const deepQueryCloseBtnClick = () => {
      context.action.clearAnswers()
      history.replace(Page.serviceDetail(service).path)
    }

    const title = `${ T(group.name) } > ${ T(service.name) }`
    const topBar = (
      <div>
        <div className="columns margin_top_20 is-mobile">
          <div className="column is-narrow">
            <p><b>{ title }</b></p>
          </div>

          <div className="column"/>

          <div className="column is-narrow">
            <div className="cursor_pointer" onClick={ deepQueryCloseBtnClick }>
              <i className="fas fa-times deep_query_close_icon"/>
            </div>
          </div>
        </div>

        <hr/>
      </div>
    )

    const deepQueryWrapper = (queryElem: any) => {
      return (
        <div className="deep_query_wrapper padding_btm_80">

          <Container isFluid={ true }>
            { topBar }

            <div className="columns">

              {
                !isMobile() &&
                <div className="column is-2">
                  <h1 className="title is-5 underlined">{ T('Your selection') }</h1>
                  { allAnswers() }
                </div>
              }

              <div className="column">
                { queryElem }
              </div>
            </div>
          </Container>
        </div>
      )
    }

    const renderQuery = () => {
      if (_.isEmpty(context.data.query.answers)) {
        return (
            <Query0/>
        )
      }
      else {
        return deepQueryWrapper(<QueryN/>)
      }
    }

    const checkout = (
      <Container isFluid={ true }>
        { topBar }
        <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
          <Elements>
            <Checkout/>
          </Elements>
        </StripeProvider>
      </Container>
    )

    const userInfoForm = (
      <Container isFluid={ true }>
        { topBar }
        <UserInfoForm/>
      </Container>
    )

    return (
      <div className="ListingDetailPage">
        <Switch>
          <Route exact path={ Page.checkout(service).path } render={ () => checkout }/>
          <Route exact path={ Page.userInfo(service).path } render={ () => userInfoForm }/>
          <Route exact path={ Page.bookingConfirm(service).path }
                 render={ () => <BookingConfirm/> }/>
          <Route path={ Page.serviceDetail(service).path } render={ () => renderQuery() }/>
        </Switch>
      </div>
    )
  }
}

export default ListingDetailPage
