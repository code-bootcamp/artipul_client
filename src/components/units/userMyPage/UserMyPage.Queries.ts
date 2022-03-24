import { gql } from '@apollo/client'

export const CREATE_PROFILE = gql`
  mutation createProfile($createProfileInput: CreateProfileInput!) {
    createProfile(createProfileInput: $createProfileInput) {
      id
      url
    }
  }
`
export const FETCH_PROFILE = gql`
  query fetchProfile {
    fetchProfile {
      id
      url
      # introduce
      # user {
      #   name
      #   phoneNum
      #   nickname
      #   point
      #   is_artist
      #   college
      # }
    }
  }
`
export const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      name
      nickname
    }
  }
`
