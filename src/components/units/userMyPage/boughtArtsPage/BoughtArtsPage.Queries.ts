import { gql } from '@apollo/client'

export const FETCH_TRANSACTION_COMPLETED_ARTS = gql`
  query fetchtransactioncompletedArts {
    fetchtransactioncompletedArts {
      id
      title
      description
      instant_bid
      price
      thumbnail
    }
  }
`
