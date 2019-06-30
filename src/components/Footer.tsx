import React from 'react'
import Container from './Container'
import {getImage} from '../util/Resource'
import './Footer.css'
import SimpleButton from './SimpleButton'

const Footer: React.FC = () => {
  return (
    <footer className="Footer footer">
      <Container>
        <div className="columns">
          <div className="column is-4">
            <div className="company_info">
              <img className="logo" src={getImage('ninjaman')} alt=""/>
              <div className="names">
                <h1 className="title is-4 has-text-white-ter">NinjaMan</h1>
                <p>© 2019 NinjaMan Ltd.</p>
              </div>
            </div>
          </div>

          <div className="column"/>

          <div className="column is-4">
            <div className="entries">
              <SimpleButton text="About Us" lightColor={true}/>
              <SimpleButton text="Terms & Conditions" lightColor={true}/>
              <SimpleButton text="Privacy" lightColor={true}/>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
