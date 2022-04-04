import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import ReviewDetailPresenter from './ReviewDetail.Presenter'
import {
  DELETE_BOARD,
  FETCH_BOARD,
  ADD_LIKE_BOARD,
  FETCH_PROFILE,
  FETCH_BOARD_IMAGES
} from './ReviewDetail.Queries'
import { useContext } from 'react'
import { GlobalContext } from '../../../../../pages/_app'
import { warningModal } from '../../../commons/Modal'

export default function ReviewDetailContainer() {
  const { accessToken } = useContext(GlobalContext)
  const router = useRouter()
  const [isTrue, setIsTrue] = useState(false)
  const { data: fetchBoardImages } = useQuery(FETCH_BOARD_IMAGES, {
    variables: { boardId: router.query.reviewid }
  })

  const { data: profile } = useQuery(FETCH_PROFILE)
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
  }

  const onClickEdit = () => {
    router.push(`/review/${router.query.reviewid}/edit`)
  }

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: String(router.query.reviewid)
        }
      })
      router.push('/review')
    } catch (e) {
      warningModal(e.message)
    }
  }
  const handleOnClick = () => {
    setIsTrue((prev) => !prev)
  }

  return (
    <ReviewDetailPresenter
      data={data}
      profile={profile}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      isTrue={isTrue}
      handleOnClick={handleOnClick}
      onClickLike={onClickLike}
      accessToken={accessToken}
      fetchBoardImages={fetchBoardImages}
    />
  )
}
