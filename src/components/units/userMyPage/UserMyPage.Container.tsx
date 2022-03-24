import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import UserMyPagePresenter from './UserMyPage.Presenter'
import { CREATE_PROFILE, FETCH_PROFILE, FETCH_USER } from './UserMyPage.Queries'

export default function UserMyPageContainer() {
  const [createProfile] = useMutation(CREATE_PROFILE)
  // const { data } = useQuery(FETCH_PROFILE)
  const router = useRouter()
  const { data } = useQuery(FETCH_USER)
  const [point, setPoint] = useState(true)
  const [post, setPost] = useState(false)
  const [like, setLike] = useState(false)
  const [boards, setBoards] = useState(false)
  const [bought, setBought] = useState(false)
  const [auction, setAuction] = useState(false)

  const onClickCreateProfile = async () => {
    try {
      await createProfile({
        variables: {
          createProfileInput: {
            url: '',
            introduce: ''
          }
        }
      })
    } catch (e) {
      alert(e.message)
    }
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
      onClickCreateProfile={onClickCreateProfile}
      data={data}
      point={point}
      post={post}
      like={like}
      boards={boards}
      bought={bought}
      auction={auction}
      onClickPoint={onClickPoint}
      onClickPost={onClickPost}
      onClickLike={onClickLike}
      onClickBoards={onClickBoards}
      onClickBought={onClickBought}
      onClickAuction={onClickAuction}
    />
  )
}
