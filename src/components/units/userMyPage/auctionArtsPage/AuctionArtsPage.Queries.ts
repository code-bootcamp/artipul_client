import { gql } from '@apollo/client'

export const FETCH_ENGAGING = gql`
  query fetchEngaging($page: Float!) {
    fetchEngaging(page: $page) {
      art {
        id
        thumbnail
        title
        tag1
        deadline
        instant_bid
        price
        is_soldout
      }
    }
  }
`
export const FETCH_ENGAGE_COUNT = gql`
  query fetchEngageCount {
    fetchEngageCount
  }
`
