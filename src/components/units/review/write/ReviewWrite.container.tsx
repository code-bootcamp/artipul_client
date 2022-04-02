import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useState } from 'react'
import { FETCH_TRANSACTION_COMPLETED_ARTS } from '../../userMyPage/boughtArtsPage/BoughtArtsPage.Queries'
import {
  CREATE_BOARD,
  UPDATE_BOARD,
  UPLOAD_BOARD_IMAGE
} from './ReveiwWrite.queries'
import ReviewPreview from './ReviewWrite.presenter'

export default function ReviewContainer(props) {
  const router = useRouter()
  const [createBoard] = useMutation(CREATE_BOARD)
  const [uploadBoardImage] = useMutation(UPLOAD_BOARD_IMAGE)
  const [updateBoard] = useMutation(UPDATE_BOARD)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [images, setImages] = useState(
    props.imagesData?.fetchBoardImgaes.length
      ? [props.sortImages]
      : ['', '', '']
  )
  const { data: completedArtsData } = useQuery(
    FETCH_TRANSACTION_COMPLETED_ARTS,
    {
      variables: { page: 1 }
    }
  )

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }
  const onChangeContent = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value)
  }

  const onChangeFileUrls = (file, index) => {
    const newFileUrls = [...images]
    newFileUrls[index] = file
    setImages(newFileUrls)
  }

  const onClickCreateBoard = async () => {
    if (!title || !content) {
      alert('빈칸을 모두 채워주세요')
      return
    }
    try {
      const result = await createBoard({
        variables: {
          createBoardInput: {
            title,
            content,
            image_urls: images
          }
        }
      })
      router.push(`/review/${result.data?.createBoard.id}`)
    } catch (e) {
      alert(e.message)
    }
  }

  const onClickUpdateBoard = async () => {
    if (!title || !content) {
      alert('빈칸을 모두 채워주세요')
      return
    }
    try {
      const result = await updateBoard({
        variables: {
          boardId: router.query.reviewid,
          updateBoardInput: {
            title,
            content,
            image_urls: images
          }
        }
      })
      // console.log(result)
      console.log()
      router.push(`/review/${result.data?.updateBoard.id}`)
    } catch (e) {
      alert(e.message)
    }
  }

  useEffect(() => {
    if (props.imagesData?.fetchBoardImgaes?.length && props.sortImages) {
      setImages(props.sortImages)
    }
  }, [props.sortImages])

  return (
    <ReviewPreview
      completedArtsData={completedArtsData}
      data={props.data}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onClickCreateBoard={onClickCreateBoard}
      images={images}
      uploadBoardImage={uploadBoardImage}
      onChangeFileUrls={onChangeFileUrls}
      isEdit={props.isEdit}
      onClickUpdateBoard={onClickUpdateBoard}
    />
  )
}
