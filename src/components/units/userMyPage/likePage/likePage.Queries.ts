import { gql } from '@apollo/client'

export const FETCH_LIKE_ART = gql`
  query fetchLikeArt {
    fetchLikeArt {
      id
      title
      description
      start_price
      instant_bid
      price
      deadline
      is_soldout
    }
  }
`
