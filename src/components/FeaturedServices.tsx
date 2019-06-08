import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import {getImage} from '../util/Resource'
import Container from './Container'
import './FeaturedServices.css'

interface Listing {
  name: string,
  image: string
}

const FeaturedServices: React.FC = () => {
  const mkListingElems = (listings: Listing[]) => {
    return listings.map((i: Listing, index: number) => {
      const image = getImage(i.image, 'jpg')
      return (
        <div className="featured-listing" key={index}>
          <div className="listing-img" style={{backgroundImage: `url('${image}')`}}/>
          <div className="listing-text">
            <p>{i.name}</p>
          </div>
        </div>
      )
    })
  }


  const leftArrow = <div className="scroll-menu-arrow">{'<'}</div>
  const rightArrow = <div className="scroll-menu-arrow">{'>'}</div>

  const mkScrollMenu = (elems: any[]) => {
    return (
      <div className="ScrollMenu">
        <ScrollMenu data={elems} arrowLeft={leftArrow} arrowRight={rightArrow}
                    alignCenter={false} hideSingleArrow={true} hideArrows={true}
                    arrowDisabledClass="is-invisible" dragging={false} wheel={false}/>
      </div>
    )
  }

  const mkFeaturedSection = (name: string, listings: Listing[]) => {
    return (
      <div className="featured-section">
        <b>{name}</b>
        {mkScrollMenu(mkListingElems(listings))}
      </div>
    )
  }

  const plumbingListings: Listing[] = [
    {name: 'Setup Pipes', image: 'plumbing1'},
    {name: 'Fix Pipes', image: 'plumbing1'},
    {name: 'Enlarge Pipes', image: 'plumbing1'},
    {name: 'Unclog Pipes', image: 'plumbing1'},
    {name: 'Replacing Pipes', image: 'plumbing1'},
    {name: 'Decorate Pipes', image: 'plumbing1'},
  ]

  const cleaningListings: Listing[] = [
    {name: 'Clean Shop', image: 'cleaning1'},
    {name: 'Clean Yo Ass', image: 'cleaning2'},
  ]

  const repairListings: Listing[] = [
    {name: 'Washing Machine', image: 'cleaning2'},
    {name: 'Sofa', image: 'cleaning2'},
    {name: 'Your Relationship', image: 'cleaning2'},
    {name: 'Floor', image: 'cleaning2'},
    {name: 'TV', image: 'cleaning2'},
    {name: 'Computer', image: 'cleaning2'},
  ]

  return (
    <section className="FeaturedServices section">
      <Container>
        {mkFeaturedSection('Plumbing', plumbingListings)}
        {mkFeaturedSection('Cleaning', cleaningListings)}
        {mkFeaturedSection('Repair', repairListings)}
      </Container>
    </section>
  )
}

export default FeaturedServices
