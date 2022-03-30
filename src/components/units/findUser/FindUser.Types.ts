import { ChangeEvent } from 'react'

export interface IFindUserProps {
  onChangePhoneNum: (e: ChangeEvent<HTMLInputElement>) => void
  onClickPhoneAuth: () => void
  onChangeToken: (e: ChangeEvent<HTMLInputElement>) => void
  data: any
  onClickButtons: () => void
  onClickAuth: () => void
  onClickAuth2: () => void
  phoneCheck: boolean
  click: boolean
  passwordCheck: boolean
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeCheck: (e: ChangeEvent<HTMLInputElement>) => void
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void
  onClickReset: () => void
}
