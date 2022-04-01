import { gql } from '@apollo/client'

export const FETCH_BOARDS_OF_MINE = gql`
  query fetchBoardsOfMine($page: Float!) {
    fetchBoardsOfMine(page: $page) {
      id
      title
      createdAt
      content
      thumbnail
    }
  }
`
export const FETCH_BOARDS_OF_MINE_COUNT = gql`
  query fetchBoardsOfMineCount {
    fetchBoardsOfMineCount
  }
`
