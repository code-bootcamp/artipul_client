import { Pagination } from 'antd'
import * as A from './AuctionArtsPage.Styles'
export default function AuctionArtsPagePresenter(props) {
  return (
    <>
      <A.Wrapper>
        <A.Header>참여중인 경매</A.Header>
        <A.TableHead>
          <A.TableHeadMenu>작품이미지</A.TableHeadMenu>
          <A.TableHeadMenu>카테고리</A.TableHeadMenu>
          <A.TableHeadMenu>작품제목</A.TableHeadMenu>
          <A.TableHeadMenu>마감일</A.TableHeadMenu>
          <A.TableHeadMenu>즉시 입찰가</A.TableHeadMenu>
          <A.TableHeadMenu>현재 입찰가</A.TableHeadMenu>
          <A.TableHeadMenu>나의 입찰가</A.TableHeadMenu>
          <A.TableHeadMenu>작품 바로가기</A.TableHeadMenu>
        </A.TableHead>
        <A.TableRow>
          <A.TableRowMenu>a</A.TableRowMenu>
          <A.TableRowMenu>b</A.TableRowMenu>
          <A.TableRowMenu>c</A.TableRowMenu>
          <A.TableRowMenu>d</A.TableRowMenu>
          <A.TableRowMenu>e</A.TableRowMenu>
          <A.TableRowMenu>f</A.TableRowMenu>
          <A.TableRowMenu>g</A.TableRowMenu>
          <A.TableRowMenu>h</A.TableRowMenu>
        </A.TableRow>
        {/* {props.data?.fetchAuctionArts.map((el) => (
          <A.TableRow key={el.id}>
            <A.TableRowMenu>{el.createdAt}</A.TableRowMenu>
            <A.TableRowMenu>{el.charge_amount}</A.TableRowMenu>
            <A.TableRowMenu>aa</A.TableRowMenu>
            <A.TableRowMenu>bb</A.TableRowMenu>
            <A.TableRowMenu>cc</A.TableRowMenu>
            <A.TableRowMenu>dd</A.TableRowMenu>
            <A.TableRowMenu>ee</A.TableRowMenu>
            <A.TableRowMenu>ff</A.TableRowMenu>
          </A.TableRow>
        ))} */}

        <Pagination
          defaultCurrent={1}
          total={props.data?.fetchHistory?.length}
          onChange={props.onChangePage}
        />
      </A.Wrapper>
    </>
  )
}
