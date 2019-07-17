import React from 'react'
import { Link } from 'react-router-dom'

const TopBar: React.FC = () => {
  return (
    <nav className="TopBar navbar is-fixed-top has-shadow" role="navigation"
         aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
          <div className="navbar-item">
            <p className='is-size-4 brand_font brand_font_gradient'>BELAZY</p>
          </div>
        </Link>
      </div>

      {/*<div className="navbar-menu">*/ }
      {/*  <div className="navbar-end">*/ }
      {/*    <div className="navbar-item">*/ }
      {/*      <div className="buttons">*/ }
      {/*        <SimpleButton text="Join As A Pro"/>*/ }
      {/*        <SimpleButton text="Sign Up"/>*/ }
      {/*        <SimpleButton text="Login"/>*/ }
      {/*      </div>*/ }
      {/*    </div>*/ }
      {/*  </div>*/ }
      {/*</div>*/ }
    </nav>
  )
}

export default TopBar
