import { gql } from '@apollo/client'
export const CREATE_ART = gql`
  mutation createArt($createArtInput: CreateArtInput!) {
    createArt(createArtInput: $createArtInput) {
      id
    }
  }
`

export const UPLOAD_ART_IMAGE = gql`
  mutation uploadArtImage($files: [Upload!]!) {
    uploadArtImage(files: $files)
  }
`
