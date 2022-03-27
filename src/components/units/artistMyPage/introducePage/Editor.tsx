import { Editor } from '@toast-ui/react-editor'

export default function EditorPage(props) {
  return <Editor ref={props.forwardRef} initialValue={props.initialValue} />
}
