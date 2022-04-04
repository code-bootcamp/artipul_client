import { gql } from '@apollo/client'

export const FETCH_TRANSACTION_COMPLETED_ARTS = gql`
  query fetchTransactionCompletedArts($page: Float!) {
    fetchTransactionCompletedArts(page: $page) {
      id
      title
      description
      deadline
      price
      thumbnail
      tag1
      payment {
        user {
          nickname
          name
        }
      }
    }
  }
`
export const FETCH_SOLDOUT_ARTS_COUNT = gql`
  query fetchSoldoutArtsCount {
    fetchSoldoutArtsCount
  }
`
