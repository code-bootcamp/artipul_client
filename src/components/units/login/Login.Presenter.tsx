import LoginAuthButtons from '../../commons/buttons/loginAuthButtons'
import SocialLoginButtons from '../../commons/buttons/socialLoginButtons'
import LoginSmallTitles from '../../commons/div/loginSmallTitle'
import LoginInputs from '../../commons/inputs/login'
import LoginSpans from '../../commons/span/login'
import * as L from './Login.Styles'
export default function LoginPresenter(props) {
  return (
    <>
      <L.Wrapper>
        <div>
          <L.Header>ARTIPUL</L.Header>
          <L.WrapperInputBox>
            <LoginSmallTitles title="이메일" />
            <LoginInputs
              id="email"
              type="text"
              onChange={props.onChangeLoginInputs}
            />
          </L.WrapperInputBox>
          <L.WrapperInputBox>
            <LoginSmallTitles title="password" />
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
            <LoginSpans title="아이디 찾기" />
            <LoginSpans title="비밀번호 재설정" />
          </L.SpanBox>

          <L.SocialLoginBox>
            <SocialLoginButtons src="/google.png" title="Google로 로그인" />
            <SocialLoginButtons src="/kakao.png" title="Kakao로 로그인" />
          </L.SocialLoginBox>
          <div>
            <button onClick={props.onClickLogout}>로그아웃</button>
          </div>
        </div>
      </L.Wrapper>
    </>
  )
}
