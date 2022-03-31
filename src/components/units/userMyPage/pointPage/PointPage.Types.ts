import { MouseEvent } from 'react'

export interface IPointPageProps {
  onClickMoney: (e: MouseEvent<HTMLSpanElement>) => void
  onClickPayment: () => void
  onChangePage: (page: any) => void
  data: any
  fetchProfileData: any
  fetchHistoryCount: any
  amount: string
}
