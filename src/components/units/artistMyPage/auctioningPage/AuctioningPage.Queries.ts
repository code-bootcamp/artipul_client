import { gql } from '@apollo/client'

export const FETCH_AUCTION_ARTS = gql`
  query fetchAuctionArts($page: Float!) {
    fetchAuctionArts(page: $page) {
      id
      title
      start_price
      instant_bid
      price
      thumbnail
      deadline
      is_soldout
      tag1
    }
  }
`
export const FETCH_AUCTION_ARTS_COUNT = gql`
  query fetchAuctionArtsCount {
    fetchAuctionArtsCount
  }
`
