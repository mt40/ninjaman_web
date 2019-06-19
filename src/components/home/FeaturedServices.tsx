import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import Container from '../Container'
import './FeaturedServices.css'
import useRouter from 'use-react-router'
import {appContext} from '../../App'
import {ServiceInfo, services} from '../../config/services'
import * as Page from '../../context/navigation'

const FeaturedServices: React.FC = () => {
  const context = React.useContext(appContext)
  const {history} = useRouter()

  const leftArrow = <div className="scroll-menu-arrow">{'<'}</div>
  const rightArrow = <div className="scroll-menu-arrow">{'>'}</div>

  const onListingClick = (sv: ServiceInfo) => {
    context.action.setService(sv)
    history.push(Page.serviceDetail(sv).path)
  }

  const mkServiceElems = (services: ServiceInfo[]) => {
    return services.map((sv, idx) => {
      return (
        <div className="featured-listing" key={idx} onClick={() => onListingClick(sv)}>
          <div className="listing-img" style={{backgroundImage: `url('${sv.image}')`}}/>
          <div className="listing-text">
            <p>{sv.name}</p>
          </div>
        </div>
      )
    })
  }

  const mkScrollMenu = (elems: any[]) => {
    return (
      <div className="ScrollMenu">
        <ScrollMenu data={elems} arrowLeft={leftArrow} arrowRight={rightArrow}
                    alignCenter={false} hideSingleArrow={true} hideArrows={true}
                    arrowDisabledClass="is-invisible" dragging={false} wheel={false}/>
      </div>
    )
  }

  const featureList = services.map((group, idx) => {
    return (
      <div key={idx} className="featured-section">
        <b>{group.name}</b>
        {mkScrollMenu(mkServiceElems(group.services))}
      </div>
    )
  })

  return (
    <section className="FeaturedServices section">
      <Container>
        {featureList}
      </Container>
    </section>
  )
}

export default FeaturedServices
