import { gql } from '@apollo/client'
export const FETCH_ART = gql`
  query fetchArt($artId: String!) {
    fetchArt(artId: $artId) {
      title
      description
      start_price
      instant_bid
      price
      thumbnail
      deadline
      user {
        nickname
      }
      tag1
    }
  }
`
