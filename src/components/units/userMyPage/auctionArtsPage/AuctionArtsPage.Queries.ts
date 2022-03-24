import { gql } from '@apollo/client'

export const FETCH_AUCTION_ARTS = gql`
  query fetchAuctionArts {
    fetchAuctionArts {
      id
      title
      description
      start_price
      instant_bid
      price
      thumbnail
      deadline
      is_soldout
    }
  }
`
