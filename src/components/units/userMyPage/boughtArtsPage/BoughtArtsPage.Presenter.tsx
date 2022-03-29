import * as B from './BoughtArtsPage.Styles'
export default function BoughtArtsPagePresenter() {
  return (
    <>
      <B.Wrapper>
        <B.Header>구매한 작품들</B.Header>
        <B.TableHead>
          <B.TableHeadMenu>작품이미지</B.TableHeadMenu>
          <B.TableHeadMenu>카테고리</B.TableHeadMenu>
          <B.TableHeadMenu>제목</B.TableHeadMenu>
          <B.TableHeadMenu>작가명</B.TableHeadMenu>
          <B.TableHeadMenu>사이즈</B.TableHeadMenu>
          <B.TableHeadMenu>낙찰가</B.TableHeadMenu>
          <B.TableHeadMenu>구매날짜</B.TableHeadMenu>
          <B.TableHeadMenu>리뷰</B.TableHeadMenu>
        </B.TableHead>

        {new Array(11).fill(1).map((el, index) => (
          <B.TableRow key={index}>
            <B.TableRowMenu>
              <B.TableRowImg src="/test3.jpg" />
            </B.TableRowMenu>
            <B.TableRowMenu>카테고리</B.TableRowMenu>
            <B.TableRowMenu>제목</B.TableRowMenu>
            <B.TableRowMenu>리재후</B.TableRowMenu>
            <B.TableRowMenu>e</B.TableRowMenu>
            <B.TableRowMenu>100000</B.TableRowMenu>
            <B.TableRowMenu>g</B.TableRowMenu>
            <B.TableRowMenu>
              <B.ReviewButton>리뷰하기</B.ReviewButton>
            </B.TableRowMenu>
          </B.TableRow>
        ))}
      </B.Wrapper>
    </>
  )
}
