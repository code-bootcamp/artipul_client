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
      url
      introduce
      address
      user {
        name
        phoneNum
        nickname
        point
        is_artist
      }
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
export const UPLOAD_ART_IMAGE = gql`
  mutation uploadArtImage($files: [Upload!]!) {
    uploadArtImage(files: $files)
  }
`
