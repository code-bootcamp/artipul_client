import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import ReviewListPresenter from './ReviewList.Presenter'
import { FETCH_BOARDS } from './ReviewList.Queries'

export default function ReviewListContainer() {
  const router = useRouter()
  const { data } = useQuery(FETCH_BOARDS)
  const onClickDetail = (event) => {
    router.push(`/review/${event.target.id}`)
  }
  return <ReviewListPresenter data={data} onClickDetail={onClickDetail} />
}
