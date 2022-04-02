import { gql } from '@apollo/client'

export const UPDATE_SOCIAL_USER = gql`
  mutation updateSocialUser($updateSocialUser: UpdateSocialUser!) {
    updateSocialUser(updateSocialUser: $updateSocialUser) {
      id
    }
  }
`
export const FIND_SOCIAL_USER = gql`
  query findSocialUser {
    findSocialUser {
      id
      email
    }
  }
`
