import { gql } from '@apollo/client'

export const FETCH_BOARDS_OF_MINE = gql`
  query fetchBoardsOfMine {
    fetchBoardsOfMine {
      id
      title
      createdAt
      content
      thumbnail
    }
  }
`
