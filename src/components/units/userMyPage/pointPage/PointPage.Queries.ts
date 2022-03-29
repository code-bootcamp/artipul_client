import { gql } from '@apollo/client'

export const CREATE_POINT_TRANSACTION = gql`
  mutation createPointTransaction($impUid: String!, $charge_amount: Float!) {
    createPointTransaction(impUid: $impUid, charge_amount: $charge_amount) {
      id
    }
  }
`

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions {
    fetchPointTransactions {
      id
      createdAt
      charge_amount
    }
  }
`

export const FETCH_HISTORY = gql`
  query fetchHistor($page: Float!) {
    fetchHistory(page: $page) {
      id
      createdAt
      point
      balance
      pointTransaction {
        status
      }
      payment {
        id
      }
    }
  }
`
