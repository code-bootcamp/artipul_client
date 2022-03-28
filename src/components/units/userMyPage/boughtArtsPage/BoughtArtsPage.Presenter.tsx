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
        <B.TableRow>
          <B.TableRowMenu>a</B.TableRowMenu>
          <B.TableRowMenu>b</B.TableRowMenu>
          <B.TableRowMenu>c</B.TableRowMenu>
          <B.TableRowMenu>d</B.TableRowMenu>
          <B.TableRowMenu>e</B.TableRowMenu>
          <B.TableRowMenu>f</B.TableRowMenu>
          <B.TableRowMenu>g</B.TableRowMenu>
          <B.TableRowMenu>h</B.TableRowMenu>
        </B.TableRow>
      </B.Wrapper>
    </>
  )
}
