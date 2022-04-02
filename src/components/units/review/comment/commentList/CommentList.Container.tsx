import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import CommentListPresenter from './CommentList.Presenter'
import { FETCH_COMMENTS } from './CommentList.Queries'

export default function CommentListContainer() {
  const router = useRouter()
  const { data } = useQuery(FETCH_COMMENTS, {
    variables: { boardId: router.query.reviewid }
  })
  return <CommentListPresenter data={data} />
}
