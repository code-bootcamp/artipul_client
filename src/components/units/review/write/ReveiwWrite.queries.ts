import { gql } from '@apollo/client'

export const UPLOAD_BOARD_IMAGE = gql`
  mutation uploadBoardImage($files: [Upload!]!) {
    uploadBoardImage(files: $files)
  }
`

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!, $artId: String!) {
    createBoard(createBoardInput: $createBoardInput, artId: $artId) {
      id
      art {
        id
        user {
          name
        }
      }
    }
  }
`

export const UPDATE_BOARD = gql`
  mutation updateBoard(
    $boardId: String!
    $updateBoardInput: UpdateBoardInput!
  ) {
    updateBoard(boardId: $boardId, updateBoardInput: $updateBoardInput) {
      id
    }
  }
`

export const FETCH_TRANSACTION_COMPLETED_ARTS = gql`
  query fetchTransactionCompletedArts($page: Float!) {
    fetchTransactionCompletedArts(page: $page) {
      id
      title
      thumbnail
      tag1
      tag2
      tag3
      tag4
      payment {
        user {
          name
        }
      }
    }
  }
`
