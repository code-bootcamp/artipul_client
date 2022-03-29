import { useLazyQuery, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import { FETCH_USER_EMAIL, RESET_USER_PASSWORD } from '../login/Login.Queries'
import FindUserPresenter from './FindUser.Presenter'

export default function FindUserContainer() {
  const router = useRouter()
  const [phoneNum, setPhoneNum] = useState('')
  const [click, setClick] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [check, setCheck] = useState('')
  const [resetUserPassword] = useMutation(RESET_USER_PASSWORD)
  const [fetchUserEmail, { data }] = useLazyQuery(FETCH_USER_EMAIL, {
    variables: { phoneNum: '' }
  })
  const onChangePhoneNum = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNum(e.target.value)
  }
  const onClickButtons = async () => {
    setClick((prev) => !prev)
    await fetchUserEmail({ variables: { phoneNum } })
  }
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }
  const onChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.value)
  }

  const onClickReset = async () => {
    if (!email || !password || !check) {
      alert('빈칸을 모두 입력하세요')
      return
    }
    if (password !== check) {
      alert('비밀번호를 다시 확인해주세요')
      return
    }
    if (password === check) {
      try {
        await resetUserPassword({
          variables: {
            email,
            password
          }
        })
        router.push('/login')
      } catch (e) {
        alert(e.message)
      }
    }
  }
  return (
    <FindUserPresenter
      data={data}
      onChangePhoneNum={onChangePhoneNum}
      onClickButtons={onClickButtons}
      click={click}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeCheck={onChangeCheck}
      onClickReset={onClickReset}
    />
  )
}
