import React from 'react'
import Container from '../Container'
import { appContext } from '../../App'
import './UserInfoForm.css'
import { Link } from 'react-router-dom'
import * as Page from '../../context/navigation'
import { translator } from '../../config/translation/util'
import { isMobile } from '../../util/Resource'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import _ from 'lodash'
import { UserInfo } from '../../models/UserInfo'

class Field {
  name: string

  constructor(name: string) {
    this.name = name
  }

  static Fullname = new Field('Fullname')
  static Email = new Field('Email')
  static Phone = new Field('Phone')
  static Address = new Field('Address')
  static BookingDate = new Field('Date')

  static values = [Field.Fullname, Field.Email, Field.Phone, Field.Address, Field.BookingDate]

  static fromName(name: string): Field {
    return _.find(Field.values, v => v.name === name) as Field
  }
}

const UserInfoForm: React.FC = () => {

  const [isFormValid, setIsFormValid] = React.useState<boolean>(false)
  const [invalidFields, setInvalidFields] = React.useState<Field[]>([])

  const context = React.useContext(appContext)
  const T = translator(context.data.lang).T

  const service = context.data.service.get.info
  const user = context.data.user

  const validateUserInfo = (user: UserInfo): boolean => {
    const fullName = _.size(user.fullName) > 0
    const email = _.size(user.email) > 0 && user.email.includes('@') && user.email.includes('.')
    const phone = _.size(user.phone) > 0 && /^\+?[0-9]{6,}$/.test(user.phone)
    const address = _.size(user.address) > 5

    const invalids: Field[] = []
    if (!fullName) invalids.push(Field.Fullname)
    if (!email) invalids.push(Field.Email)
    if (!phone) invalids.push(Field.Phone)
    if (!address) invalids.push(Field.Address)
    setInvalidFields(invalids)

    console.log('invalids', invalids)
    return invalids.length === 0
  }

  const onInputChange = (field: Field, value: string | Date) => {
    const newUser = _.cloneDeep(user)

    switch (field) {
      case Field.Fullname:
        newUser.fullName = value as string
        break
      case Field.Email:
        newUser.email = value as string
        break
      case Field.Phone:
        newUser.phone = value as string
        break
      case Field.Address:
        newUser.address = value as string
        break
      case Field.BookingDate:
        newUser.appointmentDate = value as Date
        break
    }

    context.action.setUser(newUser)

    const isValid = validateUserInfo(newUser)
    if (isValid !== isFormValid) {
      setIsFormValid(isValid)
    }
  }

  function mkField(label: string, faIcon: string) {
    const isInvalid = _.find(invalidFields, f => f.name === label) !== undefined
    const inputCls = isInvalid ? 'input is-danger' : 'input'

    return (
      <div className="field">
        <label className="label">{ T(label) }</label>
        <div className="control has-icons-left">
          <input
            className={ inputCls }
            type="text"
            placeholder={ label.toLowerCase() }
            onChange={ (event) => onInputChange(Field.fromName(label), event.target.value) }/>
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
    onInputChange(Field.BookingDate, newDate)
  }

  const handleTimeChange = (date: Date) => {
    const newDate = new Date(
      user.appointmentDate.getFullYear(),
      user.appointmentDate.getMonth(),
      user.appointmentDate.getDate(),
      date.getHours(),
      date.getMinutes(),
    )
    onInputChange(Field.BookingDate, newDate)
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
    const maxTime = new Date(0, 0, 0, 20)

    let minDate = new Date()
    const minTime = () => {
      const earliest = 10
      const fromNow = now.getHours() + 2 // need 2 hours in advance

      let rs = fromNow < earliest ? earliest : fromNow

      if (rs > maxTime.getHours()) {
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

  const btnCheckout = () => {
    if (isFormValid) {
      return (
        <Link to={ Page.checkout(service).path }>
          <button className="button is-info h_padding_50 purple_gradient">
            { T('Checkout') }
          </button>
        </Link>
      )
    }
    return (
      <button className="button is-info h_padding_50 purple_gradient" disabled>
        { T('Checkout') }
      </button>
    )
  }

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

        {
          isMobile()
            ? (
              <div className="v_margin_20 text_centered">
                { btnCheckout() }
              </div>
            )
            : (
              <div className="v_margin_20 text_right">
                { btnCheckout() }
              </div>
            )
        }
      </Container>
    </div>
  )
}

export default UserInfoForm
