import { Editor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'

export default function EditorPage(props) {
  return (
    <Editor
      ref={props.forwardRef}
      initialValue={props.initialValue}
      height={props.height}
    />
  )
}
