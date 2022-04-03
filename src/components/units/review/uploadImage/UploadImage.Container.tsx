import { ChangeEvent, useRef } from 'react'
import * as S from './UploadImage.Styles'

export default function UploadImageContainer(props) {
  const fileRef = useRef(null)

  const onClickRef = () => {
    fileRef.current?.click()
  }
  const head = `https://storage.googleapis.com`
  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target?.files?.[0]
    try {
      const result = await props.uploadBoardImage({ variables: { files } })
      props.onChangeFileUrls(result.data?.uploadBoardImage[0], props.index)
    } catch (e) {
      alert(e.message)
    }
  }
  return (
    <>
      {props.el ? (
        <>
          <S.PhotoWrapper>
            <S.Photo src={`${head}${props.el}`} onClick={onClickRef} />
          </S.PhotoWrapper>

          <input
            type="file"
            onChange={onChangeFile}
            ref={fileRef}
            style={{ display: 'none' }}
          />
        </>
      ) : (
        <>
          <input
            type="file"
            onChange={onChangeFile}
            ref={fileRef}
            style={{ display: 'none' }}
          />
          <S.Upload>
            <S.UploadBtn onClick={onClickRef}>사진 업로드하기</S.UploadBtn>
          </S.Upload>
        </>
      )}
    </>
  )
}
