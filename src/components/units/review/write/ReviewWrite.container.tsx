import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { FETCH_TRANSACTION_COMPLETED_ARTS } from './ReveiwWrite.queries'
import {
  CREATE_BOARD,
  UPDATE_BOARD,
  UPLOAD_BOARD_IMAGE
} from './ReveiwWrite.queries'
import ReviewWriteUI from './ReviewWrite.presenter'

export default function ReviewContainer(props) {
  const router = useRouter()
  const [isSelected, setIsSelected] = useState(false)
  const [createBoard] = useMutation(CREATE_BOARD)
  const [uploadBoardImage] = useMutation(UPLOAD_BOARD_IMAGE)
  const [updateBoard] = useMutation(UPDATE_BOARD)
  const [title, setTitle] = useState('')
  const [artId, setArtId] = useState('')
  const [url, setUrl] = useState('')
  const [content, setContent] = useState('')
  const [images, setImages] = useState(
    props.imagesData?.fetchBoardImgaes.length
      ? [props.sortImages]
      : ['', '', '']
  )

  const [isOpen, setIsOpen] = useState(false)

  const { data: completedArtsData } = useQuery(
    FETCH_TRANSACTION_COMPLETED_ARTS,
    {
      variables: { page: 1 }
    }
  )
  const onClickBought = (el) => () => {
    setArtId(el.id)
    setUrl(el.thumbnail)
    setIsSelected(true)
    console.log('id', el.id)
    console.log('url', el.thumbnail)
  }

  // const { data: tags, refetch } = useQuery(FETCH_TRANSACTION_COMPLETED_ARTS, {
  //   variables: { page: 1 }
  // })

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

  const onClickSelectArt = (event) => {
    setIsOpen(true)
  }
  const onClickCloseModal = (event) => {
    setIsOpen(false)
  }

  const onClickMoveToList = (event) => {
    router.push('/review')
  }

  const onClickCreateBoard = async () => {
    if (!title || !content) {
      alert('빈칸을 모두 채워주세요')
      return
    }
    try {
      const result = await createBoard({
        variables: {
          artId,
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
    <ReviewWriteUI
      completedArtsData={completedArtsData}
      data={props.data}
      images={images}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onClickCreateBoard={onClickCreateBoard}
      uploadBoardImage={uploadBoardImage}
      onChangeFileUrls={onChangeFileUrls}
      onClickUpdateBoard={onClickUpdateBoard}
      onClickSelectArt={onClickSelectArt}
      onClickCloseModal={onClickCloseModal}
      onClickMoveToList={onClickMoveToList}
      isEdit={props.isEdit}
      isOpen={isOpen}
      onClickBought={onClickBought}
      url={url}
      isSelected={isSelected}
    />
  )
}
