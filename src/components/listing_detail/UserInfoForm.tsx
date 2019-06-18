import React from 'react'
import Container from '../Container'
import {appContext} from '../../App'
import './UserInfoForm.css'
import {Link} from 'react-router-dom'
import * as Page from '../../context/navigation'

const UserInfoForm: React.FC = () => {
  const context = React.useContext(appContext)
  console.log('UserInfoForm', context) // REMOVE

  const onBackClick = () => {
    context.action.query.goBack(false)
  }

  function mkField(label: string, value: string, faIcon: string) {
    return (
      <div className="field">
        <label className="label">{label}</label>
        <div className="control has-icons-left">
          <input
            className="input"
            type="text"
            placeholder={label.toLowerCase()}
            defaultValue={value}/>
          <span className="icon is-small is-left">
            <i className={faIcon}/>
          </span>
        </div>
      </div>
    )
  }

  function mkSelectField(label: string) {
    return (
      <div className="field">
        <label className="label">{label}</label>
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

  const inputs = (
    <div>
      {mkField('Fullname', 'Tom Hanks', 'fas fa-user')}
      {mkField('Email', 'tom@hanks.com', 'fas fa-envelope')}
      {mkField('Phone', '18001560', 'fas fa-mobile-alt')}
      {mkField('Address', '12 Wall St, NYC, USA', 'fas fa-map-marker-alt')}
      {mkSelectField('What time works best for you')}
    </div>
  )

  const allAnswers = () => {
    const items = context.data.query.answers.map((a, idx) => {
      return (
        <li key={idx}>- {a}</li>
      )
    })
    return <ul className="all_answers">{items}</ul>
  }

  return (
    <div className="ListingDetailUserInfoForm v_padding_80">
      <Container isSmall={false}>
        <div className="columns">
          <div className="column is-3">
            {allAnswers()}
          </div>
          <div className="column">
            <h1 className="title">Tell us about you</h1>
            {inputs}
          </div>
        </div>

        <div className="columns v_margin_20">
          <div className="column is-narrow">
            <button className="button" onClick={() => onBackClick()}>
              Back
            </button>
          </div>

          <div className="column"/>

          <div className="column is-narrow">
            <Link to={Page.checkout.path}>
              <button className="button is-info">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default UserInfoForm
