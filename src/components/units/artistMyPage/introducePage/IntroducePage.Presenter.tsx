import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor, Viewer } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import dynamic from 'next/dynamic'

const EditorC = dynamic(() => import('./Editor'), { ssr: false })

export default function IntroducePagePresenter(props) {
  console.log(props.data?.fetchProfile?.introduce)
  return (
    <>
      <h1>작사 소개 페이지</h1>

      <EditorC
        forwardRef={props.editorRef}
        initialValue={props.data?.fetchProfile?.introduce}
      />
      <button onClick={props.onClickUpdateIntroduce}>수정완료</button>

      {/* <Viewer initialValue={props.dd} /> */}
    </>
  )
}
