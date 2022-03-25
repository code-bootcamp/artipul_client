import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../../../pages/_app'
import LoginPresenter from './Login.Presenter'
import { LOGIN, LOGOUT } from './Login.Queries'

export default function LoginContainer() {
  const router = useRouter()
  const { setAccessToken } = useContext(GlobalContext)
  const [login] = useMutation(LOGIN)
  const [logout] = useMutation(LOGOUT)
  const [loginInputs, setLoginInputs] = useState({
    email: '',
    password: ''
  })
  const [loginCheck, setLoginCheck] = useState(false)

  const onChangeLoginInputs = (event) => {
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

  const onClickLogout = async () => {
    try {
      await logout()
      // window.location.reload()
    } catch (e) {
      alert(e.message)
    }
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
      onClickLogout={onClickLogout}
    />
  )
}
