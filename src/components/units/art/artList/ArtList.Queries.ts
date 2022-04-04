import { gql } from '@apollo/client'

export const FETCH_ARTS = gql`
  query fetchArts($tags: [String!]!) {
    fetchArts(tags: $tags) {
      id
      title
      start_price
      instant_bid
      deadline
      thumbnail
      nickname
      tag1
      is_soldout
    }
  }
`
