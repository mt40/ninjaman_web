import React from 'react'
import {getImage} from '../../util/Resource'
import './ServiceGroupList.css'
import Container from '../Container'

const ServiceGroupList: React.FC = () => {
  const mkGroup = (name: string, imageName: string) => {
    return (
      <div className="level-item has-text-centered">
        <div>
          <img className="service-group-logo" src={getImage(imageName)} alt={name}/>
          <p>{name}</p>
        </div>
      </div>
    )
  }

  return (
    <section className="ServiceGroupList section">
      <Container>
        <div className="ServiceGroupList level">
          {mkGroup('Plumbing', 'plumbing')}
          {mkGroup('Cleaning', 'cleaning')}
          {mkGroup('Repair', 'repair')}
        </div>
      </Container>
    </section>
  )
}

export default ServiceGroupList
