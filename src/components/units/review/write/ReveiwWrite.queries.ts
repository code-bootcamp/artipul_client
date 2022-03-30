import { gql } from '@apollo/client'

export const UPLOAD_BOARD_IMAGE = gql`
  mutation uploadBoardImage($files: [Upload!]!) {
    uploadBoardImage(files: $files)
  }
`

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      id
    }
  }
`
