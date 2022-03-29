import * as A from './AuctionArtsPage.Styles'
import { IAuctionArtsProps } from './AuctionArtsPage.Types'
export default function AuctionArtsPagePresenter(props: IAuctionArtsProps) {
  console.log(props.data?.fetchAuctionArts)
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
          <A.TableHeadMenu>바로가기</A.TableHeadMenu>
        </A.TableHead>
        {/* {new Array(7).fill(1).map((el, index) => (
          <A.TableRow key={index}>
            <A.TableRowMenu>
              <A.TableRowImg src="/test4.webp" />
            </A.TableRowMenu>
            <A.TableRowMenu>회황</A.TableRowMenu>
            <A.TableRowMenu>제목</A.TableRowMenu>
            <A.TableRowMenu>날짜</A.TableRowMenu>
            <A.TableRowMenu>100000원</A.TableRowMenu>
            <A.TableRowMenu>70000원</A.TableRowMenu>
            <A.TableRowMenu>80000원</A.TableRowMenu>
            <A.TableRowMenu>
              <A.DetailButton onClick={props.onClickArtDetail(el)}>
                바로가기
              </A.DetailButton>
            </A.TableRowMenu>
          </A.TableRow>
        ))} */}
        {props.data?.fetchAuctionArts.map((el, index) => (
          <A.TableRow key={index}>
            <A.TableRowMenu>
              <A.TableRowImg src="/test4.webp" />
            </A.TableRowMenu>
            <A.TableRowMenu>회황</A.TableRowMenu>
            <A.TableRowMenu>제목</A.TableRowMenu>
            <A.TableRowMenu>날짜</A.TableRowMenu>
            <A.TableRowMenu>100000원</A.TableRowMenu>
            <A.TableRowMenu>70000원</A.TableRowMenu>
            <A.TableRowMenu>80000원</A.TableRowMenu>
            <A.TableRowMenu>
              <A.DetailButton onClick={props.onClickArtDetail(el)}>
                바로가기
              </A.DetailButton>
            </A.TableRowMenu>
          </A.TableRow>
        ))}

        <A.Paginations
          defaultCurrent={1}
          total={props.data?.fetchAuctionArts?.length}
          onChange={props.onChangePage}
        />
      </A.Wrapper>
    </>
  )
}
