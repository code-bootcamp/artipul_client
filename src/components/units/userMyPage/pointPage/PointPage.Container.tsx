import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import { warningModal } from '../../../commons/Modal'
import { FETCH_PROFILE } from '../UserMyPage.Queries'
import PointPagePresenter from './PointPage.Presenter'
import {
  CREATE_POINT_TRANSACTION,
  FETCH_HISTORY,
  FETCH_HISTORY_COUNT
} from './PointPage.Queries'

export default function PointPageContainer() {
  const [createPointTransaction] = useMutation(CREATE_POINT_TRANSACTION)
  const [amount, setAmount] = useState('')
  const { data, refetch } = useQuery(FETCH_HISTORY, { variables: { page: 1 } })
  const { data: fetchHistoryCount } = useQuery(FETCH_HISTORY_COUNT)
  const { data: fetchProfileData } = useQuery(FETCH_PROFILE)
  const onClickMoney = (e) => {
    setAmount(e.target.id)
  }
  const onChangePage = (page) => {
    refetch({ page })
  }

  const createPoint = async (rsp: any) => {
    try {
      await createPointTransaction({
        variables: {
          impUid: rsp.imp_uid,
          charge_amount: Number(amount)
        }
      })
    } catch (e) {
      warningModal(e.message)
    }
  }
  const onClickPayment = () => {
    const IMP = window.IMP // 생략 가능
    IMP.init('imp70536123')
    IMP.request_pay(
      {
        pg: 'html5_inicis',
        pay_method: 'card',
        name: '포인트 금액',
        amount,
        buyer_email: `${fetchProfileData?.fetchProfile.user.email}`,
        buyer_name: `${fetchProfileData?.fetchProfile.user.name}`,
        buyer_tel: `${fetchProfileData?.fetchProfile.user.phoneNum}`
      },
      (rsp) => {
        if (rsp.success) {
          createPoint(rsp)
          refetch()
        } else {
          warningModal('결제에 실패하셨습니다.')
        }
      }
    )
  }

  return (
    <PointPagePresenter
      onClickMoney={onClickMoney}
      onClickPayment={onClickPayment}
      data={data}
      fetchProfileData={fetchProfileData}
      amount={amount}
      onChangePage={onChangePage}
      fetchHistoryCount={fetchHistoryCount}
    />
  )
}
