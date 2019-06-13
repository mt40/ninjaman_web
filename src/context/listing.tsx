import {Listing} from '../models/Listing'

export interface Listing {
  current: Listing
}

export interface ListingActions {
  setCurrent: (l: Listing) => void
}

export const defaultListingActions: ListingActions = {
  setCurrent: () => {
  },
}