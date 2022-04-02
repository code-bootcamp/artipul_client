import { ChangeEvent, useRef } from 'react'

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
          <div style={{ width: '150px', height: '150px' }}>
            <img
              src={`${head}${props.el}`}
              style={{ width: '100%', height: '100%' }}
            />
          </div>

          <input
            type="file"
            onChange={onChangeFile}
            ref={fileRef}
            style={{ display: 'none' }}
          />
          <button onClick={onClickRef}>사진 수정하기</button>
        </>
      ) : (
        <>
          <input
            type="file"
            onChange={onChangeFile}
            ref={fileRef}
            style={{ display: 'none' }}
          />
          <button onClick={onClickRef}>사진 등록하기</button>
        </>
      )}
    </>
  )
}
