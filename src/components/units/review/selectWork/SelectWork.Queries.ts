import { gql } from '@apollo/client'

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: String!) {
    fetchBoard(boardId: $boardId) {
      id
      art {
        id
        title
        description
        thumbnail
        user {
          name
        }
        tag1
      }
    }
  }
`
