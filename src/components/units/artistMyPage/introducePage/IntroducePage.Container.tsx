import { useMutation, useQuery } from '@apollo/client'
import { Editor } from '@toast-ui/react-editor'
import { useRef, useState } from 'react'
import {
  CREATE_PROFILE,
  FETCH_PROFILE
} from '../../userMyPage/UserMyPage.Queries'
import IntroducePagePresenter from './IntroducePage.Presenter'

export default function IntroducePageContainer() {
  const [introduce, setIntroduce] = useState('')
  const [createProfile] = useMutation(CREATE_PROFILE)
  const editorRef = useRef<Editor>(null)
  const { data } = useQuery(FETCH_PROFILE)
  // const onChangeIntroduce = () => {
  //   setIntroduce(editorRef.current.getInstance().getMarkdown())
  // }

  const onClickUpdateIntroduce = async () => {
    try {
      await createProfile({
        variables: {
          createProfileInput: {
            introduce: String(editorRef.current?.getInstance().getMarkdown())
          }
        }
      })
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
      introduce={introduce}
    />
  )
}
