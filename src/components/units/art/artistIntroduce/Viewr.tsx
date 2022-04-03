import { Viewer } from '@toast-ui/react-editor'
import { IViewerProps } from './ArtistIntroduce.Types'
import '@toast-ui/editor/dist/toastui-editor.css'
import { useEffect, useState } from 'react'

export default function ViewerPage(props: IViewerProps) {
  const [aaa, setAaa] = useState('')
  useEffect(() => {
    if (props.data?.fetchArtistProfile?.introduce) {
      setAaa(props.data?.fetchArtistProfile?.introduce)
    }
  }, [props.data?.fetchArtistProfile?.introduce])
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
