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
      is_artist
    }
  }
`

export const INSTANT_BID = gql`
  mutation instantBid($artId: String!, $price: Float!, $artistEmail: String!) {
    instantBid(artId: $artId, price: $price, artistEmail: $artistEmail)
  }
`

export const BID = gql`
  mutation Bid($artId: String!, $bid_price: Float!) {
    Bid(artId: $artId, bid_price: $bid_price)
    saveBid(artId: $artId, bid_price: $bid_price)
  }
`

export const ADD_LIKE_ART = gql`
  mutation addLikeArt($artId: String!) {
    addLikeArt(artId: $artId)
  }
`

export const FETCH_LIKE_ART = gql`
  query fetchLikeArt($page: Float) {
    fetchLikeArt(page: $page) {
      id
    }
  }
`
