import React from 'react'
import Container from '../Container'
import {appContext} from '../../App'
import {CardElement, injectStripe} from 'react-stripe-elements'
import './Checkout.css'

const Checkout: React.FC = () => {
  const context = React.useContext(appContext)
  console.log('Checkout', context) // REMOVE

  const allAnswers = () => {
    const items = context.data.query.answers.map((a, idx) => {
      return (
        <li key={idx}>- {a}</li>
      )
    })
    return <ul className="all_answers">{items}</ul>
  }

  return (
    <div className="Checkout v_padding_80">
      <Container isSmall={true}>
        <h1 className="title">Time to pay mate :)</h1>

        <div>
          <h1 className="title is-5">Your cart</h1>
          {allAnswers()}
          <p>Total: 99$</p>
        </div>

        <hr/>

        <div>
          <h1 className="title is-5">Payment method</h1>
          <CardElement/>
          <button className="button is-info margin_top_20">
            Pay
          </button>
        </div>
      </Container>
    </div>
  )
}

export default injectStripe(Checkout)
