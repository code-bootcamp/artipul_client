import * as A from './AuctionArtsPage.Styles'
import { IAuctionArtsProps } from './AuctionArtsPage.Types'
export default function AuctionArtsPagePresenter(props: IAuctionArtsProps) {
  const head = `https://storage.googleapis.com`
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
          <A.TableHeadMenu>판매여부</A.TableHeadMenu>
          <A.TableHeadMenu>바로가기</A.TableHeadMenu>
        </A.TableHead>
        {props.data?.fetchEngaging.map((el, index) => (
          <A.TableRow key={index}>
            <A.TableRowMenu>
              <A.TableRowImg src={`${head}${el.art.thumbnail}`} />
            </A.TableRowMenu>
            <A.TableRowMenu>{el.art.tag1}</A.TableRowMenu>
            <A.TableRowMenu>{el.art.title}</A.TableRowMenu>
            <A.TableRowMenu>{el.art.deadline.slice(0, 10)}</A.TableRowMenu>
            <A.TableRowMenu>{el.art.instant_bid}</A.TableRowMenu>
            <A.TableRowMenu>{el.art.price}</A.TableRowMenu>
            <A.TableRowMenu>{el.is_soldout ? '낙찰' : '진행중'}</A.TableRowMenu>
            <A.TableRowMenu>
              <A.DetailButton onClick={props.onClickArtDetail(el)}>
                바로가기
              </A.DetailButton>
            </A.TableRowMenu>
          </A.TableRow>
        ))}

        <A.Paginations
          current={props.page}
          total={props.fetchEngageCount?.fetchEngageCount}
          onChange={props.onChangePage}
        />
      </A.Wrapper>
    </>
  )
}
