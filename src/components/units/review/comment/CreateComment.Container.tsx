import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import CreateCommentPresenter from './CreateComment.Presenter'
import { CREATE_COMMENT } from './CreateComment.Queries'

export default function CreateCommentContainer() {
  const router = useRouter()
  const [createComment] = useMutation(CREATE_COMMENT)
  const [content, setContent] = useState('')

  const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value)
  }

  const onClickCreateComment = async () => {
    try {
      await createComment({
        variables: {
          boardId: router.query.reviewid,
          content
        }
      })
    } catch (e) {
      alert(e.message)
    }
  }
  return (
    <CreateCommentPresenter
      onChangeContent={onChangeContent}
      onClickCreateComment={onClickCreateComment}
    />
  )
}
