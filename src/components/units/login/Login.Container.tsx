import { useMutation } from '@apollo/client'
import { useContext } from 'react'
import { GlobalContext } from '../../../../pages/_app'
import LoginPresenter from './Login.Presenter'
import { LOGIN } from './Login.Queries'

export default function LoginContainer() {
  const { setAccessToken } = useContext(GlobalContext)
  const [login] = useMutation(LOGIN)

  const onClickLogin = async () => {
    try {
      const result = await login({
        variables: {
          email: '',
          password: ''
        }
      })
      const accessToken = result.data?.login.accessToken || ''
      if (setAccessToken) setAccessToken(accessToken)
    } catch (e) {
      alert(e.message)
    }
  }
  return <LoginPresenter />
}
