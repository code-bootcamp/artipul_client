import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useRef, useState } from 'react'
import { CREATE_BOARD, UPLOAD_BOARD_IMAGE } from './ReveiwWrite.queries'
import ReviewWriteUI from './ReviewWrite.presenter'
import { IReviewWriteProps } from './ReviewWrite.types'

export default function ReviewWrite(props: IReviewWriteProps) {
  const router = useRouter()

  const [isActive, setIsActive] = useState(false)
  const [file, setFile] = useState<File>()
  const [imageUrl, setImageUrl] = useState('')

  const [title, setTitle] = useState()
  const [content, setContent] = useState()

  const [titleWarning, setTitleWarning] = useState('')
  const [contentWarning, setContentwarning] = useState('')

  const fileRef = useRef<HTMLInputElement>(null)

  const [uploadBoardImage] = useMutation(UPLOAD_BOARD_IMAGE)
  const [createBoard] = useMutation(CREATE_BOARD)

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)

    if (event.target.value) {
      setTitleWarning('')
    }

    if (event.target.value && content) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }
  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
    if (event.target.value) {
      setContentwarning('')
    }

    if (title && event.target.value) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    console.log(file)
    if (!file) {
      alert('파일이 없습니다!')
      return
    }

    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = (data) => {
      if (typeof data.target?.result === 'string') {
        console.log(data.target?.result)
        setImageUrl(data.target?.result)
        setFile(file)
      }
    }
  }

  const onClickImage = () => {
    fileRef.current?.click()
  }

  const onClickSubmit = async () => {
    if (!title) {
      setTitleWarning('제목을 입력해주세요')
    }
    if (!content) {
      setContentwarning('내용을 입력해주세요')
    }
    if (title && content) {
      try {
        // 1. image업로드해서 url 받아오기
        //    - uploadFile()
        const result = await uploadBoardImage({
          variables: {
            files: file
          }
        })
        const imageUrl = result.data?.uploadBoardImage[0] || ''
        console.log(imageUrl)

        const result2 = await createBoard({
          variables: {
            createBoardInput: {
              title,
              content,
              image_urls: [imageUrl]
            }
          }
        })
        console.log(result2.data?.createBoard.id)
        // router.push(구매후기 상세보기)
      } catch (error) {
        console.log(error.message)
      }
    }
    if (!props.isEdit) {
      alert('게시물이 등록되었습니다😄')
    }
    console.log('title:', title)
    console.log('contents:', content)

    console.log('게시물 등록됨123')
  } // onClickSubmit() end

  // --------------------------------------------------------------------------------------------------------
  // 게시물 수정하기

  const onClickUpdate = async () => {
    if (!title && !content) {
      alert('제목과 내용 중 하나는 입력해야 합니다🙄')
      return
    }

    // 모든 조건이 맞을 때
    interface IMyUpdateBoardInput {
      title?: string
      contents?: string
    }
    const myUpdateBoardInput: IMyUpdateBoardInput = {}
    if (title) myUpdateBoardInput.title = title
    if (content) myUpdateBoardInput.contents = content

    try {
      await createBoard({
        variables: {
          boardId: router.query.aaa,
          updateBoardInput: myUpdateBoardInput
        }
      })
      alert('수정이 완료되었습니다.')
      router.push(`/boards/${router.query.aaa}`)
    } catch (error: any) {
      alert(error.message)
    }
  } // onClickUpdate() end

  // --------------------------------------------------------------------------------------------------------

  return (
    <ReviewWriteUI
      isActive={isActive}
      isEdit={props.isEdit}
      fileRef={fileRef}
      onClickUpdate={onClickUpdate}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onChangeFile={onChangeFile}
      onClickSubmit={onClickSubmit}
      onClickImage={onClickImage}
      titleWarning={titleWarning}
      contentWarning={contentWarning}
    />
  )
}
