import { useMutation, useQuery } from '@apollo/client'
import { useState } from 'react'
import PointPagePresenter from './PointPage.Presenter'
import {
  CREATE_POINT_TRANSACTION,
  FETCH_POINT_TRANSACTIONS
} from './PointPage.Queries'

export default function PointPageContainer() {
  const [createPointTransaction] = useMutation(CREATE_POINT_TRANSACTION)
  const [amount, setAmount] = useState(0)
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS)
  const onClickMoney = (e) => {
    setAmount(e.target.id)
  }

  const createPoint = async (rsp) => {
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
    IMP.init('imp70536123') // Example: imp00000000

    // IMP.request_pay(param, callback) 결제창 호출
    IMP.request_pay(
      {
        // param
        pg: 'html5_inicis',
        pay_method: 'card',
        // merchant_uid: "ORD20180131-0000011", // 아이디는 중복되지 않음. 빼게되면 자동으로 생김
        name: '포인트 금액',
        amount,
        buyer_email: 'quswowns928@naver.com',
        buyer_name: `박쥬비`
        // buyer_tel: "010-4242-4242",
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
          // refetch()
          // 1. 백엔드에 결제관련 데이터 넘겨주기
          // => 즉, mutation 실행하기
          // createPointTransactionOfLoading 3시 10분
        } else {
          // 결제 실패 시 로직,
        }
      }
    )
  }

  return (
    <PointPagePresenter
      onClickMoney={onClickMoney}
      onClickPayment={onClickPayment}
      data={data}
    />
  )
}
