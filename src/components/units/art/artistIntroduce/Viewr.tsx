import { Viewer } from '@toast-ui/react-editor'
import { IViewerProps } from './ArtistIntroduce.Types'
import '@toast-ui/editor/dist/toastui-editor.css'

export default function ViewerPage(props: IViewerProps) {
  return (
    <Viewer
      initialValue={
        props.data?.fetchArtistProfile?.introduce
          ? props.data?.fetchArtistProfile?.introduce
          : '작성된 작가 소개가 없습니다'
      }
    />
  )
}
