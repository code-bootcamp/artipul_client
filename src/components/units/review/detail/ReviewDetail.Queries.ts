import { gql } from '@apollo/client'

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      title
      createdAt
      content
      thumbnail
      user {
        name
        nickname
      }
      art {
        tag1
        tag2
        tag3
        tag4
      }
    }
  }
`
export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: String!) {
    deleteBoard(boardId: $boardId)
  }
`

export const FETCH_BOARD_IMAGES = gql`
  query fetchBoardImgaes($boardId: String!) {
    fetchBoardImgaes(boardId: $boardId) {
      url
    }
  }
`

export const ADD_LIKE_BOARD = gql`
  mutation addLikeBoard($boardId: String!) {
    addLikeBoard(boardId: $boardId)
  }
`
