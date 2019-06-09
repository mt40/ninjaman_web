import React from 'react'
import ListingDetailHero from '../components/ListingDetailHero'
import useRouter from 'use-react-router'
import {appContext} from '../App'
import ListingDetailQuery1 from '../components/ListingDetailQuery1'

const ListingDetailPage: React.FC = () => {
  const context = React.useContext(appContext)
  const {history} = useRouter()

  if(context.state.current.listing.isEmpty) {
    history.replace("/")
    return null;
  }
  else {
    return (
      <div className="ListingDetailPage">
        <ListingDetailHero/>
        <ListingDetailQuery1/>
      </div>
    )
  }
}

export default ListingDetailPage
