import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import { FETCH_PROFILE } from '../UserMyPage.Queries'
import PointPagePresenter from './PointPage.Presenter'
import { CREATE_POINT_TRANSACTION, FETCH_HISTORY } from './PointPage.Queries'

export default function PointPageContainer() {
  const [createPointTransaction] = useMutation(CREATE_POINT_TRANSACTION)
  const [amount, setAmount] = useState('')
  const { data, refetch } = useQuery(FETCH_HISTORY, { variables: { page: 1 } })
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
      alert(e.message)
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
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        // m_redirect_url: 모바일 결제 시 돌아갈 주소
        // 백엔드에서 웹훅노티피케이션 요청해야함.
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          createPoint(rsp)
          refetch()
        } else {
          alert('결제에 실패하셨습니다.')
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
    />
  )
}
