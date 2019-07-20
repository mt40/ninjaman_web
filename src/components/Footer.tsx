import React from 'react'
import Container from './Container'
import { isMobile } from '../util/Resource'
import './Footer.css'
import SimpleButton from './SimpleButton'
import { translator } from '../config/translation/util'
import { appContext } from '../App'

const Footer: React.FC = () => {
  const context = React.useContext(appContext)
  const T = translator(context.data.lang).T

  const [isAboutUsVisible, setIsAboutUsVisible] = React.useState(false)

  const aboutUs = () => {
    const isActive = isAboutUsVisible ? 'is-active' : ''
    return (
      <div className={ `modal ${ isActive }` }>
        <div className="modal-background" onClick={ toggleAboutUs }/>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{ T('About Us') }</p>
            <button className="delete" aria-label="close" onClick={ toggleAboutUs }/>
          </header>
          <section className="modal-card-body">
            <p>
              {
                T('Belazy is a marketplace for for home beauty services, based in Ho Chi Minh city. ' +
                  'We help customers hire trusted professionals for all your service needs ' +
                  'at your own home.')
              }
            </p>
            <br/>
            <p>
              {
                T('If you need support, please call us at 0909882266 or email us ' +
                  'at ')
              }
              <a href="mailto: contact@belazy.vn">contact@belazy.vn</a>
            </p>
          </section>
        </div>
      </div>
    )
  }

  const toggleAboutUs = () => {
    setIsAboutUsVisible(!isAboutUsVisible)
  }

  const links = () => {
    if (isMobile()) {
      return (
        <div>
          <div>
            <div className="company_info">
              <p className='is-size-4 brand_font has-text-white-ter'>BELAZY</p>
              <div className="names">
                <p>© 2019 Belazy Ltd.</p>
              </div>
            </div>
          </div>

          <div className="entries v_margin_20" style={ {
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile() ? 'flex-start' : 'flex-end',
          } }>
            <SimpleButton style={ {minWidth: 'auto', paddingLeft: 0} } text="About Us"
                          lightColor={ true }
                          onClick={ toggleAboutUs }/>
            <SimpleButton style={ {minWidth: 'auto', paddingLeft: 0} } text="Terms & Conditions"
                          lightColor={ true }
                          href={ 'https://drive.google.com/file/d/1i0c95hjWbDtZlcIiNMkWII5woeeJw_5P/view' }/>
          </div>
        </div>
      )
    }

    return (
      <div className="columns">
        <div className="column is-4">
          <div className="company_info">
            <p className='is-size-4 brand_font has-text-white-ter'>BELAZY</p>
            <div className="names">
              <p>© 2019 Belazy Ltd.</p>
            </div>
          </div>
        </div>

        <div className="column"/>

        <div className="column is-4">
          <div className="entries" style={ {
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile() ? 'flex-start' : 'flex-end',
          } }>
            <SimpleButton style={ {minWidth: 'auto'} } text="About Us" lightColor={ true }
                          onClick={ toggleAboutUs }/>
            <SimpleButton style={ {minWidth: 'auto'} } text="Terms & Conditions"
                          lightColor={ true }
                          href={ 'https://drive.google.com/file/d/1i0c95hjWbDtZlcIiNMkWII5woeeJw_5P/view' }/>
          </div>
        </div>
      </div>
    )
  }

  const layout = () => {
    if (isMobile()) {
      return (
        <div>
          { aboutUs() }
          { links() }
        </div>
      )
    }

    return (
      <Container>
        { aboutUs() }
        { links() }
      </Container>
    )
  }

  return (
    <div className="Footer footer">
      { layout() }
    </div>
  )
}

export default Footer
