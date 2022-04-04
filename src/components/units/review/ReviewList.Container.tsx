import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ReviewListPresenter from './ReviewList.Presenter'
import { FETCH_BOARDS } from './ReviewList.Queries'

export default function ReviewListContainer() {
  const router = useRouter()
  const [page, setPage] = useState(0)

  const { data } = useQuery(FETCH_BOARDS)
  console.log(data)

  const onClickMoreButton = () => {
    setPage((prev) => prev + 9)
  }

  const onClickDetail = (event) => {
    router.push(`/review/${event.target.id}`)
  }
  const onClickReviewNew = () => {
    router.push('/review/new')
  }
  const onClickReviewCard = (event) => {
    router.push(`/review/${event.currentTarget.id}`)
  }
  return (
    <ReviewListPresenter
      data={data}
      page={page}
      onClickDetail={onClickDetail}
      onClickReviewNew={onClickReviewNew}
      onClickMoreButton={onClickMoreButton}
    />
  )
}
