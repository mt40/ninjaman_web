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

const UserInfoForm: React.FC = () => {
  const context = React.useContext(appContext)
  const service = context.data.service.get.info
  console.log('UserInfoForm', context) // REMOVE

  // todo: make global state
  const [selectedDate, setSelectedDate] = React.useState(new Date())

  function mkField(label: string, value: string, faIcon: string) {
    return (
      <div className="field">
        <label className="label">{ T(label) }</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder={ label.toLowerCase() }
            defaultValue={ value }/>
          <span className="icon is-small is-left">
            <i className={ faIcon }/>
          </span>
        </div>
      </div>
    )
  }

  function mkSelectField(label: string) {
    return (
      <div className="field">
        <label className="label">{ label }</label>
        <div className="control">
          <div className="select">
            <select>
              <option>8:00</option>
              <option>10:00</option>
              <option>13:00</option>
              <option>15:00</option>
              <option>17:00</option>
              <option>21:00</option>
            </select>
          </div>
        </div>
      </div>
    )
  }

  const handleDateChange = (date: Date) => {
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      selectedDate.getHours(),
      selectedDate.getMinutes(),
    )
    setSelectedDate(newDate)
  }

  const handleTimeChange = (date: Date) => {
    const newDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      date.getHours(),
      date.getMinutes(),
    )
    setSelectedDate(newDate)
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
            <input className="input" type="text" value={ this.props.value } onChange={ () => {} }/>
            <span className="icon is-small is-left">
              <i className={ this.props.icon }/>
            </span>
          </div>
        </div>
      )
    }
  }

  const dateTimeField = () => {
    return (
      <div>
        <label className="label">{ T('What time works best for you') }</label>

        <div className='columns'>
          <div className='column'>
            <ReactDatePicker
              className='input'
              selected={ selectedDate }
              todayButton={ T('today') }
              onChange={ handleDateChange }
              dateFormat="dd/MM/yyyy"
              withPortal
              customInput={ <DateInput icon='fas fa-calendar-alt'/> }
            />
          </div>

          <div className='column'>
            <ReactDatePicker
              className='input'
              selected={ selectedDate }
              onChange={ handleTimeChange }
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={ 30 }
              timeFormat='HH:mm'
              dateFormat='HH:mm'
              timeCaption={ T('Time') }
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
      { mkField('Fullname', 'Tom Hanks', 'fas fa-user') }
      { mkField('Email', 'tom@hanks.com', 'fas fa-envelope') }
      { mkField('Phone', '18001560', 'fas fa-mobile-alt') }
      { mkField('Address', '12 Wall St, NYC, USA', 'fas fa-map-marker-alt') }
      {/*{ mkSelectField('What time works best for you') }*/ }
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
              <button className="button is-info">
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
