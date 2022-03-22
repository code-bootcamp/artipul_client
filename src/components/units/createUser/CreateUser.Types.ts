import { ChangeEvent, MouseEvent } from 'react'
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister
} from 'react-hook-form'

export interface ICreateIsArtist {
  isArtist: boolean
}

export interface ICreateUserProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>
  register: UseFormRegister<FieldValues>
  formState: FormState<FieldValues>
  onClickCreateUser: (data: ICreateUserDataProps) => void
  isArtist: boolean
  onChangePhoneNum: (event: ChangeEvent<HTMLInputElement>) => void
  onClickPhoneNum: (event: MouseEvent<HTMLButtonElement>) => void
  onChangeToken: (event: ChangeEvent<HTMLInputElement>) => void
  onClickPhoneAuth: (event: MouseEvent<HTMLButtonElement>) => void
  onChangeNickName: (event: ChangeEvent<HTMLInputElement>) => void
  onClickNicknameAuth: (event: MouseEvent<HTMLButtonElement>) => void
  checkPhoneAuth: boolean
  nicknameAuth: boolean
  warningPhone: string
  warningNickname: string
  isCheckPhoneNum: boolean
}
export interface ICreateUserDataProps {
  name: string
  phonenum: string
  password: string
  email: string
  nickname: string
  is_artist: boolean
  college?: string
}
