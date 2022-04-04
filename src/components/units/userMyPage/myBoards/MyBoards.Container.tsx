import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import MyBoardsPresenter from './MyBoards.Presenter'
import {
  FETCH_BOARDS_OF_MINE,
  FETCH_BOARDS_OF_MINE_COUNT
} from './MyBoards.Queries'

export default function MyBoardsContainer() {
  const router = useRouter()
  const { data, refetch } = useQuery(FETCH_BOARDS_OF_MINE, {
    variables: { page: 1 }
  })
  const { data: fetchBoardsOfMineCount } = useQuery(FETCH_BOARDS_OF_MINE_COUNT)
  const onChange = (page) => {
    refetch(page)
  }
  const onClickBoardDetail = (el) => () => {
    router.push(`/review/${el.id}`)
  }
  return (
    <MyBoardsPresenter
      data={data}
      fetchBoardsOfMineCount={fetchBoardsOfMineCount}
      onChange={onChange}
      onClickBoardDetail={onClickBoardDetail}
    />
  )
}
