import * as A from './AuctioningPage.Styles'
export default function AuctioningPagePresenter() {
  return (
    <>
      <A.Wrapper>
        <A.Header>경매중인 작품들</A.Header>
        <A.TableHead>
          <A.TableHeadMenu>작품이미지</A.TableHeadMenu>
          <A.TableHeadMenu>카테고리</A.TableHeadMenu>
          <A.TableHeadMenu>작품제목</A.TableHeadMenu>
          <A.TableHeadMenu>마감일</A.TableHeadMenu>
          <A.TableHeadMenu>즉시 입찰가</A.TableHeadMenu>
          <A.TableHeadMenu>현재 입찰가</A.TableHeadMenu>
          <A.TableHeadMenu>상세보기</A.TableHeadMenu>
        </A.TableHead>
        {new Array(6).fill(1).map((el, index) => (
          <A.TableRow key={index}>
            <A.TableRowMenu>
              <A.TableRowImg src="/test4.webp" />
            </A.TableRowMenu>
            <A.TableRowMenu>회황</A.TableRowMenu>
            <A.TableRowMenu>제목</A.TableRowMenu>
            <A.TableRowMenu>날짜</A.TableRowMenu>
            <A.TableRowMenu>100000원</A.TableRowMenu>
            <A.TableRowMenu>70000원</A.TableRowMenu>
            <A.TableRowLastMenu>
              <A.DetailButton>상세보기</A.DetailButton>
            </A.TableRowLastMenu>
          </A.TableRow>
        ))}
      </A.Wrapper>
    </>
  )
}
