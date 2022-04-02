import { gql } from '@apollo/client'

export const CREATE_COMMENT = gql`
  mutation createComment($boardId: String!, $content: String!) {
    createComment(boardId: $boardId, content: $content) {
      id
    }
  }
`
