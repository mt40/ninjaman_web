import React from 'react'
import { Link } from 'react-router-dom'
import { T } from '../../config/translation/util'
import Spinner from 'react-spinkit'
import './BookingConfirm.css'

const BookingConfirm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const loadingTime = Math.random() * 3000 + 2000 // millis

  React.useEffect(
    () => {
      setTimeout(() => {
        setIsLoading(false)
      }, loadingTime)
    },
    [loadingTime],
  )

  const content = () => {
    if (isLoading) {
      return (
        <div>
          <div className='spinner_wrapper'>
            <Spinner name='folding-cube'/>
          </div>

          <p className='margin_top_40 is-size-5'>
            <b>{ T('Please wait...') }</b>
          </p>
        </div>
      )
    }

    return (
      <div>
        <h1 className="title">{ T('Booking successful!') }</h1>

        <p className='margin_top_80'>
          {
            T('Now just sit back and relax. ' +
              'Our provider will call you shortly to arrange the service.')
          }
        </p>
        <p>
          { T('We will also send the booking information to your email in a few minutes') }
        </p>

        <Link to="/">
          <button className='button is-info margin_top_80'>{ T('Home Page') }</button>
        </Link>
      </div>
    )
  }

  return (
    <div className="BookingConfirm v_padding_80 text_centered">
      { content() }
    </div>
  )
}

export default BookingConfirm
