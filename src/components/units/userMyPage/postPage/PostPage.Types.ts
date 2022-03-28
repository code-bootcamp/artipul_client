import { ChangeEvent } from 'react'

export interface IPostProps {
  data: any
  view: boolean
  onClickDaumPostCode: () => void
  onCompleteDaumPostcode: (ad: any) => void
  zipcode: string
  address: string
  addressDetail: string
  onChangeAddressDetail: (e: ChangeEvent<HTMLInputElement>) => void
  onClickSubmitProfile1: () => void
}
