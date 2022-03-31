import { gql } from '@apollo/client'

export const FETCH_TIMED_OUT_ART = gql`
  query fetchTimedOutArt($page: Float!) {
    fetchTimedOutArt(page: $page) {
      id
      title
      deadline
      price
      thumbnail
      is_soldout
      tag1
    }
  }
`
export const FETCH_TIMED_OUT_ARTS_COUNT = gql`
  query fetchTimedOutArtsCount {
    fetchTimedOutArtsCount
  }
`
