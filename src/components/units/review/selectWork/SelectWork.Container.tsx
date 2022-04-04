import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import SelectWorkUI from './SelectWork.Presenter'
import { FETCH_BOARD } from './SelectWork.Queries'

export default function SelectWorkContainer() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.reviewid }
  })

  return <SelectWorkUI data={data} />
}
