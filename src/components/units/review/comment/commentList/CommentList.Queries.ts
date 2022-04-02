import { gql } from '@apollo/client'
export const FETCH_COMMENTS = gql`
  query fetchComments($boardId: String!) {
    fetchComments(boardId: $boardId) {
      id
      content
      #   user {
      #     id
      #     nickname
      #   }
    }
  }
`
