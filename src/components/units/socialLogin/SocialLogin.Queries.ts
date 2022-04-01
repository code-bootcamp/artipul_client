import { gql } from '@apollo/client'

export const UPDATE_SOCIAL_USER = gql`
  mutation updateSocialUser($updateSocialUser: UpdateSocialUser!) {
    updateSocialUser(updateSocialUser: $updateSocialUser) {
      id
    }
  }
`
