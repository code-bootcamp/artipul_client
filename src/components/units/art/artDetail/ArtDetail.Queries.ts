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
      is_soldout
      user {
        nickname
        email
      }
      tag1
    }
  }
`
export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      point
    }
  }
`

export const INSTANT_BID = gql`
  mutation instantBid($artId: String!, $price: Float!, $artistEmail: String!) {
    instantBid(artId: $artId, price: $price, artistEmail: $artistEmail)
  }
`

// http://localhost:3000/art/236de9aa-bf1d-48da-9867-2f3f4e689d71
