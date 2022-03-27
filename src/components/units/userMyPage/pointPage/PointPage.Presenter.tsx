import Head from 'next/head'
import { IPointPageProps } from './PointPage.Types'
export default function PointPagePresenter(props: IPointPageProps) {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <h1>포인트 충전</h1>
      <div>충전 금액을 선택해주세요</div>
      <div id="100" onClick={props.onClickMoney}>
        100원
      </div>
      <div id="5000" onClick={props.onClickMoney}>
        5000원
      </div>
      <div id="10000" onClick={props.onClickMoney}>
        10000원
      </div>
      <div id="30000" onClick={props.onClickMoney}>
        30000원
      </div>
      <button onClick={props.onClickPayment}>충전하기!</button>
      <div>충전 내역</div>
      <div>
        {props.data?.fetchPointTransactions.map((el, index) => (
          <div key={el.id}>
            <span>{el.createdAt}</span>
            <span>{el.charge_amount}</span>
          </div>
        ))}
      </div>
    </>
  )
}
