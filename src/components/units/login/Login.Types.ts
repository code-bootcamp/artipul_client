import { ChangeEvent } from 'react'

export interface ILoginProps {
  onChangeLoginInputs: (e: ChangeEvent<HTMLInputElement>) => void
  onClickLogin: () => void
  onClickMoveToCreateUser: () => void
  loginCheck: boolean
  onClickFindUser: () => void
  onClickGoogle: () => void
  onClickKakao: () => void
}
