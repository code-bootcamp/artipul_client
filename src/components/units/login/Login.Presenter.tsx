import LoginAuthButtons from '../../commons/buttons/loginAuthButtons'
import LoginSmallTitles from '../../commons/div/loginSmallTitle'
import LoginInputs from '../../commons/inputs/login'
import LoginSpans from '../../commons/span/login'

export default function LoginPresenter(props) {
  return (
    <>
      <h1>로그인하기</h1>
      <div>
        <LoginSmallTitles title="이메일" />
        <LoginInputs
          id="email"
          type="text"
          onChange={props.onChangeLoginInputs}
          placeholder="이메일을 입력하세요"
        />
      </div>
      <div>
        <LoginSmallTitles title="password" />
        <LoginInputs
          id="password"
          type="password"
          onChange={props.onChangeLoginInputs}
          placeholder="비밀번호를 입력하세요"
        />
      </div>
      <div>
        <LoginAuthButtons
          disabled={!props.loginCheck}
          onClick={props.onClickLogin}
          title="로그인"
        />
      </div>
      <div>
        <LoginSpans title="아이디 찾기" /> |{' '}
        <LoginSpans title="비밀번호 재설정" /> |{' '}
        <LoginSpans onClick={props.onClickMoveToCreateUser} title="회원가입" />
      </div>
      <div>
        <button onClick={props.onClickLogout}>로그아웃</button>
      </div>
      <div>소셜 로그인</div>
      <div>
        <button>Google</button>
        <button>Kakao</button>
      </div>
    </>
  )
}
