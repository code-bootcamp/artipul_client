import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ReviewListPresenter from './ReviewList.Presenter'
import { FETCH_BOARDS } from './ReviewList.Queries'

export default function ReviewListContainer() {
  const router = useRouter()
  const [page, setPage] = useState(0)
  const { data } = useQuery(FETCH_BOARDS)

  const onClickDetail = (event) => {
    router.push(`/review/${event.currentTarget.id}`)
  }
  const onClickReviewNew = () => {
    router.push('/review/new')
  }

  const onClickMoreButton = () => {
    setPage((prev) => prev + 10)
  }

  return (
    <ReviewListPresenter
      data={data?.fetchBoards.slice(0, page + 10)}
      page={page}
      onClickDetail={onClickDetail}
      onClickReviewNew={onClickReviewNew}
      onClickMoreButton={onClickMoreButton}
    />
  )
}
