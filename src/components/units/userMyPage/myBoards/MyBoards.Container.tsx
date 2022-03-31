import { useQuery } from '@apollo/client'
import MyBoardsPresenter from './MyBoards.Presenter'
import { FETCH_BOARDS_OF_MINE } from './MyBoards.Queries'

export default function MyBoardsContainer() {
  const { data, refetch } = useQuery(FETCH_BOARDS_OF_MINE, {
    variables: { page: 1 }
  })
  const onChange = (page) => {
    refetch(page)
  }
  return <MyBoardsPresenter data={data} onChange={onChange} />
}
