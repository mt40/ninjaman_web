import React from 'react'
import Container from './Container'
import { getImage, isMobile } from '../util/Resource'
import './Footer.css'
import SimpleButton from './SimpleButton'

const Footer: React.FC = () => {
  return (
    <footer className="Footer footer">
      <Container>
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
              <SimpleButton style={ {minWidth: 'auto'} } text="About Us" lightColor={ true }/>
              <SimpleButton style={ {minWidth: 'auto'} } text="Terms & Conditions" lightColor={ true }/>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
