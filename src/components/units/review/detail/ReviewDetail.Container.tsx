import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ReviewDetailPresenter from './ReviewDetail.Presenter'
import {
  DELETE_BOARD,
  FETCH_BOARD,
  ADD_LIKE_BOARD
} from './ReviewDetail.Queries'

export default function ReviewDetailContainer() {
  const router = useRouter()
  const [isTrue, setIsTrue] = useState(false)

  const [deleteBoard] = useMutation(DELETE_BOARD)
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.reviewid }
  })
  const [addLikeBoard] = useMutation(ADD_LIKE_BOARD)

  const onClickLike = async () => {
    const result = await addLikeBoard({
      variables: {
        boardId: String(router.query.reviewid)
      }
    })

    console.log(result)
  }

  const onClickEdit = () => {
    router.push(`/review/${router.query.reviewid}/edit`)
  }
  const onClickDelete = async () => {
    await deleteBoard({
      variables: {
        boardId: String(router.query.reviewid)
      }
    })
  }
  const handleOnClick = () => {
    setIsTrue((prev) => !prev)
  }

  return (
    <ReviewDetailPresenter
      data={data}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      isTrue={isTrue}
      handleOnClick={handleOnClick}
      onClickLike={onClickLike}
    />
  )
}