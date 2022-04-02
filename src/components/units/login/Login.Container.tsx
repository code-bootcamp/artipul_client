import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useContext, useState } from 'react'
import { GlobalContext } from '../../../../pages/_app'
import LoginPresenter from './Login.Presenter'
import { LOGIN } from './Login.Queries'

export default function LoginContainer() {
  const router = useRouter()
  const { setAccessToken } = useContext(GlobalContext)
  const [login] = useMutation(LOGIN)
  const [loginInputs, setLoginInputs] = useState({
    email: '',
    password: ''
  })
  const [loginCheck, setLoginCheck] = useState(false)
  const onClickFindUser = () => {
    router.push('/findUser')
  }
  const onChangeLoginInputs = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginInputs({
      ...loginInputs,
      [event.target.id]: event.target.value
    })
    if (loginInputs.email && loginInputs.password) {
      setLoginCheck(true)
    } else {
      setLoginCheck(false)
    }
  }

  const onClickLogin = async () => {
    if (loginInputs.email && loginInputs.password) {
      setLoginCheck(false)
      try {
        const result = await login({
          variables: {
            ...loginInputs
          }
        })
        const accessToken = result.data?.login.accessToken || ''
        setLoginCheck(true)
        if (setAccessToken) setAccessToken(accessToken)
        router.push('/')
      } catch (e) {
        alert(e.message)
      }
    }
  }
  const onClickGoogle = () => {
    router.push('https://daseul.shop/login/google')
  }
  const onClickKakao = () => {
    router.push('https://daseul.shop/login/kakao')
  }

  const onClickMoveToCreateUser = () => {
    router.push('/selectUser')
  }
  return (
    <LoginPresenter
      onChangeLoginInputs={onChangeLoginInputs}
      onClickLogin={onClickLogin}
      onClickMoveToCreateUser={onClickMoveToCreateUser}
      loginCheck={loginCheck}
      onClickFindUser={onClickFindUser}
      onClickGoogle={onClickGoogle}
      onClickKakao={onClickKakao}
    />
  )
}
