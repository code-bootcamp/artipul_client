import LoginAuthButtons from '../../commons/buttons/loginAuthButtons'
import SocialLoginButtons from '../../commons/buttons/socialLoginButtons'
import LoginSmallTitles from '../../commons/div/loginSmallTitle'
import LoginInputs from '../../commons/inputs/login'
import LoginSpans from '../../commons/span/login'
import * as L from './Login.Styles'
import { ILoginProps } from './Login.Types'
export default function LoginPresenter(props: ILoginProps) {
  return (
    <>
      <L.Wrapper>
        <div>
          <L.Header>ARTIPUL</L.Header>
          <L.WrapperInputBox>
            <LoginSmallTitles title="Email" />
            <LoginInputs
              id="email"
              type="text"
              onChange={props.onChangeLoginInputs}
            />
          </L.WrapperInputBox>
          <L.WrapperInputBox>
            <LoginSmallTitles title="Password" />
            <LoginInputs
              id="password"
              type="password"
              onChange={props.onChangeLoginInputs}
            />
          </L.WrapperInputBox>
          <L.ButtonBox>
            <LoginAuthButtons
              disabled={!props.loginCheck}
              onClick={props.onClickLogin}
              title="로그인"
            />
          </L.ButtonBox>
          <L.ButtonBox>
            <LoginAuthButtons
              onClick={props.onClickMoveToCreateUser}
              title="회원가입"
            />
          </L.ButtonBox>
          <L.SpanBox>
            <LoginSpans onClick={props.onClickFindUser} title="아이디 찾기" />
            <LoginSpans
              onClick={props.onClickFindUser}
              title="비밀번호 재설정"
            />
          </L.SpanBox>

          <L.SocialLoginBox>
            <SocialLoginButtons
              onClick={props.onClickGoogle}
              src="/google.png"
              title="Google로 로그인"
            />
            <SocialLoginButtons
              onClick={props.onClickKakao}
              src="/kakao.png"
              title="Kakao로 로그인"
            />
          </L.SocialLoginBox>
        </div>
      </L.Wrapper>
    </>
  )
}
