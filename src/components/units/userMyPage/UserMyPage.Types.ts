import { ChangeEvent, RefObject } from 'react'

export interface IMypageProps {
  url: string
  data: any
  fileRef: RefObject<HTMLInputElement>
  onChangeImageUrl: (e: ChangeEvent<HTMLInputElement>) => void
  onClickChangeProfileImage: () => void
  clickImage: boolean
  onClickEdit: () => void
  onClickIntroduce: () => void
  onClickSale: () => void
  onClickDone: () => void
  onClickPoint: () => void
  onClickPost: () => void
  onClickLike: () => void
  onClickBoards: () => void
  onClickBought: () => void
  onClickAuction: () => void
  introduce: boolean
  sale: boolean
  done: boolean
  point: boolean
  post: boolean
  like: boolean
  boards: boolean
  bought: boolean
  auction: boolean
}
