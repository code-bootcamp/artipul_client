import { gql } from '@apollo/client'

export const FETCH_LIKE_ART = gql`
  query fetchLikeArt($page: Float!) {
    fetchLikeArt(page: $page) {
      id
      title
      description
      start_price
      thumbnail
      instant_bid
      price
      deadline
      is_soldout
      tag1
      user {
        name
      }
    }
  }
`
export const FETCH_LIKE_ART_COUNT = gql`
  query fetchLikeArtCount {
    fetchLikeArtCount
  }
`
