import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { GlobalContext } from '../../../../../pages/_app'
import { LOGOUT } from '../../../units/login/Login.Queries'
import { FETCH_PROFILE } from '../../../units/userMyPage/UserMyPage.Queries'
import MainHeaderPresenter from './mainHeader.Presenter'

export default function MainHeaderContainer() {
  const { accessToken } = useContext(GlobalContext)
  const { data } = useQuery(FETCH_PROFILE)
  const [logout] = useMutation(LOGOUT)
  const router = useRouter()

  const onClickLogin = () => {
    router.push('/login')
  }
  const onClickSelectUser = () => {
    router.push('/selectUser')
  }

  const onClickLogout = async () => {
    try {
      await logout()
      window.location.reload()
    } catch (e) {
      alert(e.message)
    }
  }

  const onClickLogo = () => {
    router.push('/')
  }

  const onClickAboutus = () => {
    router.push('/aboutUs')
  }
  const onClickStore = () => {
    router.push('/art/artList')
  }
  const onClickReview = () => {
    router.push('/')
  }
  const onClickMyPage = () => {
    router.push('/mypage')
  }
  return (
    <MainHeaderPresenter
      onClickLogo={onClickLogo}
      onClickAboutus={onClickAboutus}
      onClickStore={onClickStore}
      onClickReview={onClickReview}
      onClickMyPage={onClickMyPage}
      accessToken={accessToken}
      data={data}
      onClickLogout={onClickLogout}
      onClickLogin={onClickLogin}
      onClickSelectUser={onClickSelectUser}
    />
  )
}
