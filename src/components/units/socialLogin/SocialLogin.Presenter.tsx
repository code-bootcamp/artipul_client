import AuthButtons from '../../commons/buttons/authButtons'
import CreateUserSmallTitle from '../../commons/div/createUser'
import CreateUser2 from '../../commons/inputs/createUser2'
import * as M from './SocialLogin.Styles'
import { ISocialLoginPresenterProps } from './SocialLogin.Types'
export default function SocialLoginPresenter(
  props: ISocialLoginPresenterProps
) {
  console.log(props.checkPhoneAuth, props.nicknameAuth)
  console.log(props.social?.findSocialUser.email)
  return (
    <M.Wrapper>
      <div>
        <M.Header>추가 정보를 기입해주세요</M.Header>

        <div>
          <CreateUserSmallTitle title="핸드폰" />
          <M.InputButtonBox>
            <M.InputBox>
              <CreateUser2 type="text" onChange={props.onChangePhoneNum} />
            </M.InputBox>
            <AuthButtons onClick={props.onClickPhoneNum} title="인증번호발송" />
          </M.InputButtonBox>
        </div>
        <div>
          <CreateUserSmallTitle title="인증번호" />
          <M.InputButtonBox>
            <M.InputBox>
              <CreateUser2 type="text" onChange={props.onChangeToken} />
            </M.InputBox>
            <AuthButtons
              disabled={!props.isCheckPhoneNum}
              onClick={props.onClickPhoneAuth}
              title="확인"
            />
          </M.InputButtonBox>
          <div>
            {props.minSec && (
              <M.Count>
                {String(props.min).padStart(2, '0')} :{' '}
                {String(props.sec).padStart(2, '0')}
              </M.Count>
            )}
          </div>
        </div>
        <div>
          <CreateUserSmallTitle title="닉네임" />
          <M.InputButtonBox>
            <M.InputBox>
              <CreateUser2 type="text" onChange={props.onChangeNickName} />
            </M.InputBox>
            <AuthButtons onClick={props.onClickNicknameAuth} title="중복확인" />
          </M.InputButtonBox>
        </div>
        <CreateUserSmallTitle title="미대생 여부" />
        <div>
          <CreateUserSmallTitle title="미대생일 경우에만 입력해주세요" />
          <div>
            <M.CreateUserYupInputs
              onChange={props.onChangeColleage}
              placeholder="예시: ㅇㅇ대학교"
            />
          </div>
        </div>
        <M.UpdateButtonBox>
          <M.CreateUserButton
            onClick={props.onClickUpdateSocialLogin}
            checkPhoneAuth={props.checkPhoneAuth}
            nicknameAuth={props.nicknameAuth}
            disabled={!(props.checkPhoneAuth && props.nicknameAuth)}
          >
            기입 완료
          </M.CreateUserButton>
        </M.UpdateButtonBox>
      </div>
    </M.Wrapper>
  )
}
