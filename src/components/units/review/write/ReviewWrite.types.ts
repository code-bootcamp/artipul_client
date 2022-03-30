import { MutableRefObject } from 'react'

export interface IReviewWriteProps {
  isEdit?: boolean
}

export interface IReviewWriteUIProps {
  titleWarning: string
  contentWarning: string
  isEdit?: boolean
  isActive: boolean
  fileRef: MutableRefObject<HTMLInputElement>
  onChangeTitle: (event) => void
  onChangeContent: (evnet) => void
  onChangeFile: (event) => void
  onClickSubmit: () => void
  onClickImage: () => void
  onClickUpdate: () => void
}
