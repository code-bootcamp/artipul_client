import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import ReviewDetailPresenter from './ReviewDetail.Presenter'
import { DELETE_BOARD, FETCH_BOARD } from './ReviewDetail.Queries'

export default function ReviewDetailContainer() {
  const router = useRouter()
  const [deleteBoard] = useMutation(DELETE_BOARD)
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.reviewid }
  })
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

  return (
    <ReviewDetailPresenter
      data={data}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
    />
  )
}
