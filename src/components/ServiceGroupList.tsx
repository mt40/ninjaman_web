import React from 'react'
import {getImage} from '../util/Resource'

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
      <div className="container">
        <nav className="ServiceGroupList level">
          {mkGroup('Plumbing', 'plumbing')}
          {mkGroup('Cleaning', 'cleaning')}
          {mkGroup('Repair', 'repair')}
        </nav>
      </div>
    </section>
  )
}

export default ServiceGroupList
