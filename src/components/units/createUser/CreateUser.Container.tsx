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
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

export default function CreateUserContainer(props: ICreateIsArtist) {
  const router = useRouter()

  const [createUser] = useMutation(CREATE_USER)
  const [sendPhoneToken] = useMutation(SEND_PHONE_TOKEN)
  const [phoneAuth] = useMutation(PHONE_AUTH)
  const [checkNickname] = useMutation(CHECK_NICKNAME)

  const [phoneNum, setPhoneNum] = useState('')
  const [token, setToken] = useState('')
  const [checkPhoneAuth, setCheckPhoneAuth] = useState(false)
  const [isCheckPhoneNum, setIsCheckPhoneNum] = useState(false)
  const [nickname, setNickname] = useState('')
  const [nicknameAuth, setNicknameAuth] = useState(false)
  const [warningPhone, setWarningPhone] = useState('')
  const [warningNickname, setWarningNickname] = useState('')
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })
  const [minSec, setMinSec] = useState(false)
  const [min, setMin] = useState(3)
  const [sec, setSec] = useState(0)
  const time = useRef(179)
  const timerId = useRef(null)

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
      router.push('/login')
    } catch (e) {
      alert(e.message)
    }
  }

  const onClickPhoneNum = async () => {
    if (!/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(phoneNum)) {
      setWarningPhone('휴대전화 형식이 아닙니다')
      return
    }

    timerId.current = setInterval(() => {
      setMin(Math.floor(time.current / 60))
      setSec(time.current % 60)
      time.current -= 1
    }, 1000)

    try {
      await sendPhoneToken({
        variables: {
          phoneNum
        }
      })
      setMinSec(true)
      setIsCheckPhoneNum(true)
      setWarningPhone('')
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
        setWarningPhone('')
        setIsCheckPhoneNum(false)
        setMinSec(false)
        alert('인증에 성공하셨습니다.')
      } else {
        alert('인증번호를 다시 확인해주세요')
      }
    } catch (e) {
      alert(e.message)
    }
  }

  const onClickNicknameAuth = async () => {
    if (nickname.length < 2) {
      setWarningNickname('최소 두글자 이상입력해주세요')
      return
    }
    try {
      const result = await checkNickname({
        variables: {
          nickname
        }
      })
      if (result.data?.checkNickname) {
        setNicknameAuth(result.data?.checkNickname)
        setWarningNickname('')
        alert('사용가능한 닉네임입니다.')
      }
    } catch (e) {
      alert(e.message)
    }
  }

  useEffect(() => {
    if (time.current <= 0) {
      setIsCheckPhoneNum(false)
      clearInterval(timerId.current)
    }
  }, [sec])

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
      warningPhone={warningPhone}
      warningNickname={warningNickname}
      isCheckPhoneNum={isCheckPhoneNum}
      min={min}
      sec={sec}
      minSec={minSec}
    />
  )
}
