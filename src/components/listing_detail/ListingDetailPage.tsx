import React from 'react'
import Hero from './Hero'
import useRouter from 'use-react-router'
import {appContext} from '../../App'
import Query1 from './Query1'

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
        <Hero/>
        <Query1/>
      </div>
    )
  }
}

export default ListingDetailPage
