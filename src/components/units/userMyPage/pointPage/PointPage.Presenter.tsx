import Head from 'next/head'
import { IPointPageProps } from './PointPage.Types'
import * as P from './PointPage.Styles'
import LoginSmallTitles from '../../../commons/div/loginSmallTitle'
import 'antd/dist/antd.css'
import { Pagination } from 'antd'
export default function PointPagePresenter(props: IPointPageProps) {
  console.log(props.data?.fetchHistory)
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
      <P.Wrapper>
        <P.Header>포인트 충전</P.Header>
        <P.SmallHeadWrapper>
          <P.SmallHead>
            {props.fetchProfileData?.fetchProfile.user.nickname} 님의 현재 보유
            금액은&nbsp;
            <P.TitleAmountSpan>
              {props.fetchProfileData?.fetchProfile.user.point
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            </P.TitleAmountSpan>
            원 입니다
          </P.SmallHead>
        </P.SmallHeadWrapper>
        <LoginSmallTitles title="충전금액" />

        <P.MoneyWrapper>
          <P.MoneyBox id="100" onClick={props.onClickMoney}>
            <P.Money id="100" onClick={props.onClickMoney}>
              1천원
            </P.Money>
          </P.MoneyBox>
          <P.MoneyBox id="5000" onClick={props.onClickMoney}>
            <P.Money id="5000" onClick={props.onClickMoney}>
              5천원
            </P.Money>
          </P.MoneyBox>
          <P.MoneyBox id="10000" onClick={props.onClickMoney}>
            <P.Money id="10000" onClick={props.onClickMoney}>
              1만원
            </P.Money>
          </P.MoneyBox>

          <P.MoneyBox id="30000" onClick={props.onClickMoney}>
            <P.Money id="30000" onClick={props.onClickMoney}>
              3만원
            </P.Money>
          </P.MoneyBox>
          <P.MoneyBox id="50000" onClick={props.onClickMoney}>
            <P.Money id="50000" onClick={props.onClickMoney}>
              5만원
            </P.Money>
          </P.MoneyBox>
          <P.MoneyBox id="100000" onClick={props.onClickMoney}>
            <P.Money id="100000" onClick={props.onClickMoney}>
              10만원
            </P.Money>
          </P.MoneyBox>
        </P.MoneyWrapper>
        <P.WrapperBottom>
          <P.AmountDiv>
            총{' '}
            <P.AmountSpan>
              {props.amount
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            </P.AmountSpan>
            원
          </P.AmountDiv>
          <P.ChargeButton onClick={props.onClickPayment}>
            충전하기
          </P.ChargeButton>
        </P.WrapperBottom>

        <P.Header>사용내역</P.Header>
        <P.TableHead>
          <P.TableHeadMenu>날짜</P.TableHeadMenu>
          <P.TableHeadMenu>입/출금</P.TableHeadMenu>
          <P.TableHeadMenu>출금액</P.TableHeadMenu>
          <P.TableHeadMenu>입금액</P.TableHeadMenu>
          <P.TableHeadMenu>잔여금액</P.TableHeadMenu>
        </P.TableHead>
        {props.data?.fetchHistory.map((el) => (
          <P.TableRow key={el.id}>
            <P.TableRowMenu>{el.createdAt}</P.TableRowMenu>

            {el.payment ? (
              <>
                <P.TableRowMenu>출금</P.TableRowMenu>
                <P.TableRowMenu>{el.point}</P.TableRowMenu>
                <P.TableRowMenu></P.TableRowMenu>
              </>
            ) : (
              <>
                <P.TableRowMenu>입금</P.TableRowMenu>
                <P.TableRowMenu></P.TableRowMenu>
                <P.TableRowMenu>{el.point}</P.TableRowMenu>
              </>
            )}
            {/* <P.TableRowMenu>{el.point}</P.TableRowMenu> */}
            <P.TableRowMenu>{el.balance}</P.TableRowMenu>
            {/* <span>{el.user.point}</span> */}
          </P.TableRow>
        ))}
        <Pagination
          defaultCurrent={1}
          total={props.data?.fetchHistory?.length}
          onChange={props.onChangePage}
        />
      </P.Wrapper>
    </>
  )
}
