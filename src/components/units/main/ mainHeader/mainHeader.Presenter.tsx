import * as H from './mainHeader.Styles'
import { IHeaderProps } from './mainHeader.Types'
export default function MainHeaderPresenter(props: IHeaderProps) {
  return (
    <>
      <H.WWrapper>
        <H.Wrapper>
          <H.Header>ARTIPUL</H.Header>
          <H.Body>
            <H.BodyMenu onClick={props.onClickAboutus}>ABOUT US</H.BodyMenu>
            <H.BodyMenu onClick={props.onClickStore}>STORE</H.BodyMenu>
            <H.BodyMenu onClick={props.onClickReview}>REVIEW</H.BodyMenu>
            <H.BodyMenu onClick={props.onClickMyPage}>MYPAGE</H.BodyMenu>
          </H.Body>
          <H.Footer>
            {props.accessToken ? (
              <>
                <div>{props.data?.fetchProfile.user?.nickname} 님 </div>
                <H.FooterMenu onClick={props.onClickLogout}>
                  로그아웃
                </H.FooterMenu>
              </>
            ) : (
              <>
                <H.FooterMenu onClick={props.onClickSelectUser}>
                  회원가입
                </H.FooterMenu>
                <H.FooterSpan> | </H.FooterSpan>
                <H.FooterMenu onClick={props.onClickLogin}>로그인</H.FooterMenu>
              </>
            )}
          </H.Footer>
        </H.Wrapper>
      </H.WWrapper>
    </>
  )
}
