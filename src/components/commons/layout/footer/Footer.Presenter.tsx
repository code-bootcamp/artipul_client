import * as F from './Footer.Styles'
export default function FooterPresenter() {
  return (
    <>
      <F.WWrapper>
        <F.Wrapper>
          <F.Header>ARTIPUL</F.Header>
          <F.Footer>
            <F.FooterFirst>
              <F.FooterMenu>서울 구로구 디지털로 300</F.FooterMenu>
              <F.FooterMenu>지밸리플라자 13층</F.FooterMenu>
              <F.FooterMenu>사업자 등록번호 12345-12-12345</F.FooterMenu>
              <F.FooterMenu>개인정보처리방침</F.FooterMenu>
            </F.FooterFirst>
            <F.FooterFirst>
              <F.FooterMenu>작가 및 작품신청 문의</F.FooterMenu>
              <F.FooterMenu>+82 010 1234 1234</F.FooterMenu>
              <F.FooterMenu>artipul@gmail.com</F.FooterMenu>
            </F.FooterFirst>
            <F.FooterFirst>
              <F.FooterMenu>Blog</F.FooterMenu>
              <F.FooterMenu>Instagram</F.FooterMenu>
            </F.FooterFirst>
          </F.Footer>
        </F.Wrapper>
      </F.WWrapper>
    </>
  )
}
