import { gql } from '@apollo/client'

export const CREATE_POINT_TRANSACTION = gql`
  mutation createPointTransaction($impUid: String!, $charge_amount: Float!) {
    createPointTransaction(impUid: $impUid, charge_amount: $charge_amount) {
      id
      createdAt
      charge_amount
      status
    }
  }
`

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions {
    fetchPointTransactions {
      id
      createdAt
      charge_amount
      status
    }
  }
`
