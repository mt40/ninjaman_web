import React from 'react'
import Container from '../Container'
import { appContext } from '../../App'
import './UserInfoForm.css'
import { Link } from 'react-router-dom'
import * as Page from '../../context/navigation'
import { T } from '../../config/translation/util'
import { isMobile } from '../../util/Resource'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import _ from 'lodash'

const UserInfoForm: React.FC = () => {
  const context = React.useContext(appContext)
  const service = context.data.service.get.info
  const user = context.data.user
  console.log('UserInfoForm', context) // REMOVE

  const onInputChange = (field: string, value: string | Date) => {
    const newUser = _.cloneDeep(user)

    switch (field) {
      case T('Fullname'):
        newUser.fullName = value as string
        break
      case T('Email'):
        newUser.email = value as string
        break
      case T('Phone'):
        newUser.phone = value as string
        break
      case T('Address'):
        newUser.address = value as string
        break
      case T('Date'):
        newUser.appointmentDate = value as Date
        break
    }

    context.action.setUser(newUser)
  }

  function mkField(label: string, faIcon: string) {
    return (
      <div className="field">
        <label className="label">{ T(label) }</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder={ label.toLowerCase() }
            onChange={ (event) => onInputChange(label, event.target.value) }/>
          <span className="icon is-small is-left">
            <i className={ faIcon }/>
          </span>
        </div>
      </div>
    )
  }

  const handleDateChange = (date: Date) => {
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      user.appointmentDate.getHours(),
      user.appointmentDate.getMinutes(),
    )
    onInputChange('Date', newDate)
  }

  const handleTimeChange = (date: Date) => {
    const newDate = new Date(
      user.appointmentDate.getFullYear(),
      user.appointmentDate.getMonth(),
      user.appointmentDate.getDate(),
      date.getHours(),
      date.getMinutes(),
    )
    onInputChange('Date', newDate)
  }

  interface DateInputProp {
    /** An FA icon. */
    icon: string
    value?: string
    onClick?: () => void
  }

  class DateInput extends React.Component<DateInputProp> {
    render() {
      return (
        <div className="field">
          <div className='control has-icons-left is-expanded' onClick={ this.props.onClick }>
            <button className="input">
              { this.props.value }
            </button>
            <span className="icon is-small is-left">
              <i className={ this.props.icon }/>
            </span>
          </div>
        </div>
      )
    }
  }

  const dateTimeField = () => {
    const now = new Date()
    const maxTime = new Date(0, 0, 0, 17)

    let minDate = new Date()
    const minTime = () => {
      const earliest = 10
      const fromNow = now.getHours() + 2 // need 2 hours in advance

      let rs = fromNow < earliest ? earliest : fromNow

      if(rs > maxTime.getHours()) {
        rs = earliest
        minDate.setDate(minDate.getDate() + 1)
      }

      return new Date(0, 0, 0, rs)
    }

    console.log('min time', minTime())

    return (
      <div>
        <label className="label">{ T('What time works best for you') }</label>

        <div className='columns'>
          <div className='column'>
            <ReactDatePicker
              className='input'
              selected={ user.appointmentDate }
              todayButton={ T('today') }
              onChange={ handleDateChange }
              dateFormat="dd/MM/yyyy"
              minDate={ minDate }
              withPortal
              customInput={ <DateInput icon='fas fa-calendar-alt'/> }
            />
          </div>

          <div className='column'>
            <ReactDatePicker
              className='input'
              selected={ user.appointmentDate }
              onChange={ handleTimeChange }
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={ 30 }
              timeFormat='HH:mm'
              dateFormat='HH:mm'
              timeCaption={ T('Time') }
              minTime={ minTime() }
              maxTime={ maxTime }
              withPortal
              customInput={ <DateInput icon='fas fa-clock'/> }
            />

          </div>

        </div>
      </div>
    )
  }

  const inputs = (
    <div>
      { mkField('Fullname', 'fas fa-user') }
      { mkField('Email', 'fas fa-envelope') }
      { mkField('Phone', 'fas fa-mobile-alt') }
      { mkField('Address', 'fas fa-map-marker-alt') }
      { dateTimeField() }
    </div>
  )

  const topPadding = isMobile() ? 'v_padding_20' : 'v_padding_80'

  return (
    <div className={ `ListingDetailUserInfoForm ${ topPadding }` }>
      <Container isSmall={ true }>

        <div className="columns">
          <div className="column">
            <h1 className="title">{ T('Tell us about you') }</h1>
            { inputs }
          </div>
        </div>

        <hr className="margin_top_40"/>

        <div className="columns v_margin_20 is-mobile">
          <div className="column"/>

          <div className="column is-narrow">
            <Link to={ Page.checkout(service).path }>
              <button className="button is-info h_padding_50 purple_gradient">
                { T('Checkout') }
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default UserInfoForm
