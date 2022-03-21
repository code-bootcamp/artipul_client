import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
    }
  }
`

export const SEND_PHONE_TOKEN = gql`
  mutation sendPhoneToken($phoneNum: String!) {
    sendPhoneToken(phoneNum: $phoneNum)
  }
`
export const PHONE_AUTH = gql`
  mutation phoneAuth($phoneNum: String!, $token: String!) {
    phoneAuth(phoneNum: $phoneNum, token: $token)
  }
`
export const CHECK_NICKNAME = gql`
  mutation checkNickname($nickname: String!) {
    checkNickname(nickname: $nickname)
  }
`
