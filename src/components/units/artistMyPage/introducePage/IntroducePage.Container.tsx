import { useMutation, useQuery } from '@apollo/client'
import { Editor } from '@toast-ui/react-editor'
import { useRef } from 'react'
import {
  CREATE_PROFILE,
  FETCH_PROFILE
} from '../../userMyPage/UserMyPage.Queries'
import IntroducePagePresenter from './IntroducePage.Presenter'

export default function IntroducePageContainer() {
  const [createProfile] = useMutation(CREATE_PROFILE)
  const editorRef = useRef<Editor>(null)
  const { data } = useQuery(FETCH_PROFILE)

  const onClickUpdateIntroduce = async () => {
    try {
      await createProfile({
        variables: {
          createProfileInput: {
            introduce: String(editorRef.current?.getInstance().getMarkdown())
          }
        }
      })
      alert('수정이 완료되었습니다.')
    } catch (e) {
      alert(e.message)
    }

    console.log(editorRef.current?.getInstance().getMarkdown())
  }

  return (
    <IntroducePagePresenter
      onClickUpdateIntroduce={onClickUpdateIntroduce}
      data={data}
      editorRef={editorRef}
    />
  )
}
