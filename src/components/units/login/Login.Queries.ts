import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
    }
  }
`
export const LOGOUT = gql`
  mutation logout {
    logout
  }
`
export const FETCH_USER_EMAIL = gql`
  query findUserEmail($phoneNum: String!) {
    findUserEmail(phoneNum: $phoneNum)
  }
`
export const RESET_USER_PASSWORD = gql`
  mutation resetUserPassword($email: String!, $password: String!) {
    resetUserPassword(email: $email, password: $password) {
      id
    }
  }
`
