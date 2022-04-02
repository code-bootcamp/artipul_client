import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useRef, useState } from 'react'
import UserMyPagePresenter from './UserMyPage.Presenter'
import {
  CREATE_PROFILE,
  FETCH_PROFILE,
  UPLOAD_ART_IMAGE
} from './UserMyPage.Queries'

export default function UserMyPageContainer() {
  const router = useRouter()
  const [createProfile] = useMutation(CREATE_PROFILE)
  const [uploadArtImage] = useMutation(UPLOAD_ART_IMAGE)
  const { data } = useQuery(FETCH_PROFILE)
  const [point, setPoint] = useState(true)
  const [post, setPost] = useState(false)
  const [like, setLike] = useState(false)
  const [boards, setBoards] = useState(false)
  const [bought, setBought] = useState(false)
  const [auction, setAuction] = useState(false)
  const [introduce, setIntroduce] = useState(true)
  const [sale, setSale] = useState(false)
  const [done, setDone] = useState(false)
  const [clickImage, setClickImage] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const onClickEdit = () => {
    setClickImage(true)
    fileRef.current?.click()
  }

  const [url, setUrl] = useState('')
  const onClickChangeProfileImage = async () => {
    try {
      await createProfile({
        variables: {
          createProfileInput: {
            url: url[0]
          }
        }
      })
      setClickImage(false)
    } catch (e) {
      alert(e.message)
    }
  }

  const onChangeImageUrl = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files?.[0]
    try {
      const result = await uploadArtImage({
        variables: {
          files
        }
      })
      setUrl(result.data?.uploadArtImage)
    } catch (e) {
      alert(e.message)
    }
  }
  const onClickReviewNew = () => {
    router.push('/review/new')
  }

  const onClickCreateArt = () => {
    router.push('/createArt')
  }

  const onClickIntroduce = () => {
    setIntroduce(true)
    setSale(false)
    setDone(false)
  }
  const onClickSale = () => {
    setIntroduce(false)
    setSale(true)
    setDone(false)
  }
  const onClickDone = () => {
    setIntroduce(false)
    setSale(false)
    setDone(true)
  }

  const onClickPoint = () => {
    setPoint(true)
    setPost(false)
    setLike(false)
    setBoards(false)
    setBought(false)
    setAuction(false)
  }
  const onClickPost = () => {
    setPoint(false)
    setPost(true)
    setLike(false)
    setBoards(false)
    setBought(false)
    setAuction(false)
  }
  const onClickLike = () => {
    setPoint(false)
    setPost(false)
    setLike(true)
    setBoards(false)
    setBought(false)
    setAuction(false)
  }
  const onClickBoards = () => {
    setPoint(false)
    setPost(false)
    setLike(false)
    setBoards(true)
    setBought(false)
    setAuction(false)
  }
  const onClickBought = () => {
    setPoint(false)
    setPost(false)
    setLike(false)
    setBoards(false)
    setBought(true)
    setAuction(false)
  }
  const onClickAuction = () => {
    setPoint(false)
    setPost(false)
    setLike(false)
    setBoards(false)
    setBought(false)
    setAuction(true)
  }

  return (
    <UserMyPagePresenter
      onClickChangeProfileImage={onClickChangeProfileImage}
      data={data}
      point={point}
      post={post}
      like={like}
      boards={boards}
      bought={bought}
      auction={auction}
      introduce={introduce}
      sale={sale}
      done={done}
      onClickIntroduce={onClickIntroduce}
      onClickSale={onClickSale}
      onClickDone={onClickDone}
      onClickPoint={onClickPoint}
      onClickPost={onClickPost}
      onClickLike={onClickLike}
      onClickBoards={onClickBoards}
      onClickBought={onClickBought}
      onClickAuction={onClickAuction}
      clickImage={clickImage}
      onClickEdit={onClickEdit}
      fileRef={fileRef}
      onChangeImageUrl={onChangeImageUrl}
      url={url}
      onClickCreateArt={onClickCreateArt}
      onClickReviewNew={onClickReviewNew}
    />
  )
}
