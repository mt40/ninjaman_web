import React from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { appContext } from '../App'
import { Lang } from '../models/Lang'
import SimpleButton from './SimpleButton'

const TopBar: React.FC = () => {
  const context = React.useContext(appContext)
  const [, setCookie] = useCookies(['lang'])
  const [isBurgerVisible, setIsBurgerVisible] = React.useState(false)

  const changeLanguage = (lang: Lang) => {
    setCookie('lang', lang.name, {maxAge: 2147483647})
    context.action.setLang(lang)
  }

  const toggleBurgerVisible = () => {
    setIsBurgerVisible(!isBurgerVisible)
  }

  return (
    <nav className="TopBar navbar is-fixed-top has-shadow" role="navigation"
         aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/">
          <div className="navbar-item">
            <p className='is-size-4 brand_font brand_font_gradient'>BELAZY</p>
          </div>
        </Link>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
           data-target="navbarMenu" onClick={ toggleBurgerVisible }>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
          <span aria-hidden="true"/>
        </a>
      </div>

      <div id='navbarMenu' className={ 'navbar-menu' + (isBurgerVisible ? ' is-active' : '') }>
        <div className="navbar-start"/>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {
                context.data.lang === Lang.VN
                  ? <SimpleButton text="English" onClick={ () => changeLanguage(Lang.EN) }/>
                  : <SimpleButton text="Tiếng Việt" onClick={ () => changeLanguage(Lang.VN) }/>
              }
            </div>
          </div>
        </div>
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
