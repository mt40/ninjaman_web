import React from 'react'
import { Link } from 'react-router-dom'
import { T } from '../../config/translation/util'
import Spinner from 'react-spinkit'
import './BookingConfirm.css'
import DivImg from '../DivImg'
import { getImage } from '../../util/Resource'
import { appContext } from '../../App'
import * as Slack from '../../util/Slack'

const BookingConfirm: React.FC = () => {
  const context = React.useContext(appContext)

  const [isLoading, setIsLoading] = React.useState(true)
  const loadingTime = Math.random() * 3000 + 2000 // millis

  React.useEffect(
    () => {
      setTimeout(() => {
        Slack.postUserRegistration(context).then(() => {
          setIsLoading(false)
        })
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

        <DivImg url={ getImage('undraw_confirm') } height={ 200 } sizeContain
                fallbackColor={ 'transparent' }/>

        <p className='v_margin_20 h_margin_20'>
          {
            T('Now just sit back and relax. ' +
              'Our provider will call you shortly to arrange the service.')
          }
        </p>
        <p className='h_margin_20'>
          { T('We will also send the booking information to your email in a few minutes') }
        </p>

        <Link to="/">
          <button className='button is-info margin_top_80'>{ T('Home Page') }</button>
        </Link>
      </div>
    )
  }

  console.log('Confirm in context', context.data)

  return (
    <div className="BookingConfirm v_padding_80 text_centered">
      { content() }
    </div>
  )
}

export default BookingConfirm
