import React from 'react'
import Container from '../Container'
import { appContext } from '../../App'
import { CardElement, injectStripe } from 'react-stripe-elements'
import './Checkout.css'
import { Link } from 'react-router-dom'
import * as Page from '../../context/navigation'
import useRouter from 'use-react-router'
import { getImage, isMobile } from '../../util/Resource'
import DivImg from '../DivImg'
import { T } from '../../config/translation/util'
import { Cart } from '../../models/Cart'

enum PaymentMethod {
  Cash = 0,
  CreditCard = 1
}

const Checkout: React.FC = () => {
  const context = React.useContext(appContext)
  const {history} = useRouter()
  const service = context.data.service.get
  const cart = context.data.cart

  const [selectedMethod, setMethod] = React.useState(PaymentMethod.Cash)

  console.log('Checkout', context) // REMOVE

  const items = context.data.query.answers.map(a => a.get)
  const purchase = items
    .map(i => T(i))
    .reduce((prev, cur) => prev + ' > ' + cur)

  const onBackClick = () => {
    history.goBack()
  }

  const onMethodClick = (method: PaymentMethod) => {
    if (selectedMethod !== method) {
      setMethod(method)
    }
  }

  const paymentMethodSelect = () => {
    const mkMethod = (m: PaymentMethod, isActive: boolean = false) => {
      const name = () => {
        if (m === PaymentMethod.Cash) return 'Cash'
        return 'Credit Card (coming soon)'
      }

      return (
        <li key={ m } className={ isActive ? 'is-active' : '' }>
          <a onClick={ () => onMethodClick(m) }>
            <span className="icon is-small">
              <i className="fas fa-image" aria-hidden="true"/>
            </span>
            <span>{ T(name()) }</span>
          </a>
        </li>
      )
    }

    const methods = [PaymentMethod.Cash].map(m => {
      return mkMethod(m, m === selectedMethod)
    })

    return (
      <div className="tabs is-boxed">
        <ul>
          { methods }
        </ul>
      </div>
    )
  }

  const renderMethod = () => {
    if (selectedMethod === PaymentMethod.Cash) {
      return T('Please pay by cash to our staff after the service')
    }
    else {
      return (
        <div>

          <div className="payment_icons">
            <DivImg height={ 50 } width={ 100 } url={ getImage('visa') }/>
            <DivImg height={ 50 } width={ 100 } className='h_margin_20'
                    url={ getImage('mastercard') }/>
          </div>

          <CardElement className="v_margin_20"/>
        </div>
      )
    }
  }

  const purchasingItems = () => {
    return Array.from(cart.items.entries())
      .filter(([, val]) => val.count > 0)
      .map(([ansChain, val], idx) => {
        const price = Cart.priceOf(service.group, service.info, val.chain)
          .times(val.count)
          .toDisplayString()
        return (
          <div key={ idx }>
            <div className="columns is-mobile">
              <div className='column'>
                <p>{ `${ ansChain } x ${ val.count }` }</p>
              </div>
              <div className='column is-3 text_right'>
                <p><b>{ price }</b></p>
              </div>
            </div>
          </div>
        )
      })
  }

  const totalPrice =
    `${ T('Total') }: ${ cart.totalPrice(service.group, service.info).toDisplayString() }`

  const topPadding = isMobile() ? 'v_padding_20' : 'v_padding_80'

  return (
    <div className={ `Checkout ${ topPadding }` }>
      <Container isSmall={ true }>
        <h1 className="title text_centered">{ T('Booking Summary') }</h1>

        <div className="margin_top_40">
          <h1 className="title is-5">{ T('Your booking') }</h1>

          <div className="receipt">
            { purchasingItems() }

            <hr/>

            <div className='text_right'>
              <b>{ totalPrice }</b>
            </div>
          </div>
        </div>

        <hr className="margin_top_80"/>

        <div>
          <h1 className="title is-5">{ T('Payment method') }</h1>

          { paymentMethodSelect() }

          { renderMethod() }

          <hr className="margin_top_40"/>

          <div className="columns v_margin_20 is-mobile">
            <div className="column is-narrow">
              <button className="button is-outlined is-dark h_padding_10"
                      onClick={ () => onBackClick() }>
                <i className="fas fa-chevron-left" style={ {fontSize: '100%'} }/>
              </button>
            </div>

            <div className="column"/>

            <div className="column is-narrow">
              <Link to={ Page.bookingConfirm(service.info).path }>
                <button className="button is-info h_padding_50 purple_gradient">
                  { T('Confirm') }
                </button>
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default injectStripe(Checkout)
