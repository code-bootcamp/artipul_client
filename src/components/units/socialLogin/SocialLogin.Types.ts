import { ChangeEvent } from 'react'

export interface ISocialLoginProps {
  checkPhoneAuth: boolean
  nicknameAuth: boolean
}
export interface ISocialLoginPresenterProps {
  checkPhoneAuth: boolean
  nicknameAuth: boolean
  onChangePhoneNum: (event: ChangeEvent<HTMLInputElement>) => void
  onClickPhoneNum: () => void
  isCheckPhoneNum: boolean
  onClickPhoneAuth: () => void
  minSec: boolean
  min: number
  sec: number
  social: any
  onChangeNickName: (event: ChangeEvent<HTMLInputElement>) => void
  onClickNicknameAuth: () => void
  onChangeColleage: (event: ChangeEvent<HTMLInputElement>) => void
  onClickUpdateSocialLogin: () => void
  onChangeToken: (evnet: ChangeEvent<HTMLInputElement>) => void
}
