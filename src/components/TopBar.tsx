import React from 'react'
import SimpleButton from './SimpleButton'
import {getImage} from '../util/Resource'

const TopBar: React.FC = () => {
  return (
    <nav className="TopBar navbar is-fixed-top has-shadow" role="navigation"
         aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src={getImage('ninjaman')} width="28" height="28" alt="NinjaMan"/>
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <SimpleButton text="Join As A Pro"/>
                <SimpleButton text="Sign Up"/>
                <SimpleButton text="Login"/>
              </div>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default TopBar
