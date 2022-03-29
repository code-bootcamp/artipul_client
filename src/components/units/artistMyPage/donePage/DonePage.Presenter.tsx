import * as D from './DonePage.Styles'
import { IDonePageProps } from './DonePage.Types'

export default function DonePagePresenter(props: IDonePageProps) {
  return (
    <>
      <D.Wrapper>
        <D.Header>거래 완료된 작품들</D.Header>
        <D.SmallHeadWrapper>
          <D.SmallHead>
            {props.data?.fetchProfile.user.nickname} 님의 현재 보유 금액은&nbsp;
            <D.TitleAmountSpan>
              {props.data?.fetchProfile.user.point
                .toString()
                .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
            </D.TitleAmountSpan>
            원 입니다
          </D.SmallHead>
        </D.SmallHeadWrapper>
        <D.TableHead>
          <D.TableHeadMenu>작품이미지</D.TableHeadMenu>
          <D.TableHeadMenu>카테고리</D.TableHeadMenu>
          <D.TableHeadMenu>작품제목</D.TableHeadMenu>
          <D.TableHeadMenu>종료일</D.TableHeadMenu>
          <D.TableHeadMenu>낙찰가</D.TableHeadMenu>
        </D.TableHead>
        {new Array(6).fill(1).map((el, index) => (
          <D.TableRow key={index}>
            <D.TableRowMenu>
              <D.TableRowImg src="/test5.webp" />
            </D.TableRowMenu>
            <D.TableRowMenu>회황</D.TableRowMenu>
            <D.TableRowMenu>제목</D.TableRowMenu>
            <D.TableRowMenu>날짜</D.TableRowMenu>
            <D.TableRowLastMenu>100000원</D.TableRowLastMenu>
          </D.TableRow>
        ))}
      </D.Wrapper>
    </>
  )
}
