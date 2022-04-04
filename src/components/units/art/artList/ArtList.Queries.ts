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
      is_soldout
      tag1
    }
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

export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      is_artist
    }
  }
`
