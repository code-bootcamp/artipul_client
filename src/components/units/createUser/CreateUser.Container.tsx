import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import CreateUserPresenter from './CreateUser.Presenter'
import { schema } from '../../../commons/libraries/createUserSchema'
import { useMutation } from '@apollo/client'
import {
  CHECK_NICKNAME,
  CREATE_USER,
  PHONE_AUTH,
  SEND_PHONE_TOKEN
} from './CreateUser.Queries'
import { ICreateIsArtist, ICreateUserDataProps } from './CreateUser.Types'
import { ChangeEvent, useState } from 'react'

export default function CreateUserContainer(props: ICreateIsArtist) {
  const [createUser] = useMutation(CREATE_USER)
  const [sendPhoneToken] = useMutation(SEND_PHONE_TOKEN)
  const [phoneAuth] = useMutation(PHONE_AUTH)
  const [checkNickname] = useMutation(CHECK_NICKNAME)

  const [phoneNum, setPhoneNum] = useState('')
  const [token, setToken] = useState('')
  const [checkPhoneAuth, setCheckPhoneAuth] = useState(false)
  const [nickname, setNickname] = useState('')
  const [nicknameAuth, setNicknameAuth] = useState(false)
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onChangePhoneNum = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNum(event.target.value)
  }
  const onChangeNickName = (event: ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value)
  }
  const onChangeToken = (event: ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value)
  }
  const onClickCreateUser = async (data: ICreateUserDataProps) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            nickname,
            phoneNum,
            name: data?.name,
            password: data?.password,
            email: data?.email,
            is_artist: props.isArtist,
            college: data?.college
          }
        }
      })
    } catch (e) {
      alert(e.message)
    }
  }

  const onClickPhoneNum = async () => {
    if (!/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(phoneNum)) {
      alert('휴대전화 형식이 아닙니다')
      return
    }

    try {
      await sendPhoneToken({
        variables: {
          phoneNum
        }
      })
    } catch (e) {
      alert(e.message)
    }
  }
  const onClickPhoneAuth = async () => {
    try {
      const result = await phoneAuth({
        variables: {
          phoneNum,
          token
        }
      })
      if (result.data?.phoneAuth) {
        setCheckPhoneAuth(result.data?.phoneAuth)
        alert('인증에 성공하셨습니다.')
      }
    } catch (e) {
      alert(e.message)
    }
  }

  const onClickNicknameAuth = async () => {
    try {
      const result = await checkNickname({
        variables: {
          nickname
        }
      })
      if (result.data?.checkNickname) {
        setNicknameAuth(result.data?.checkNickname)
        alert('사용가능한 닉네임입니다.')
      }
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <CreateUserPresenter
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickCreateUser={onClickCreateUser}
      isArtist={props.isArtist}
      onChangePhoneNum={onChangePhoneNum}
      onChangeNickName={onChangeNickName}
      onClickPhoneNum={onClickPhoneNum}
      onChangeToken={onChangeToken}
      onClickPhoneAuth={onClickPhoneAuth}
      checkPhoneAuth={checkPhoneAuth}
      onClickNicknameAuth={onClickNicknameAuth}
      nicknameAuth={nicknameAuth}
    />
  )
}
