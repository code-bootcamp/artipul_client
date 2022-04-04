import CreateUser2 from '../../commons/inputs/createUser2'
import * as F from './FindUser.Styles'
import { IFindUserProps } from './FindUser.Types'
export default function FindUserPresenter(props: IFindUserProps) {
  return (
    <>
      <div></div>
      <F.Wrapper>
        <div>
          <F.Header>회원정보 찾기</F.Header>
          <F.WrapperBody>
            <F.BodyBox>
              <F.SmallHeader>아이디 찾기</F.SmallHeader>
              <F.CreateUserSmallTitles>핸드폰</F.CreateUserSmallTitles>
              <F.InputButtonBox>
                <F.InputBox>
                  <CreateUser2 type="text" onChange={props.onChangePhoneNum} />
                </F.InputBox>
                <F.AuthButton onClick={props.onClickPhoneAuth}>
                  인증번호 보내기
                </F.AuthButton>
              </F.InputButtonBox>
              <F.CreateUserSmallTitles>인증번호</F.CreateUserSmallTitles>
              <F.InputButtonBox>
                <F.InputBox>
                  <CreateUser2 type="text" onChange={props.onChangeToken} />
                </F.InputBox>
                <F.AuthButton onClick={props.onClickAuth}>
                  인증번호 확인
                </F.AuthButton>
              </F.InputButtonBox>
              <F.CreateUserSmallTitles>핸드폰</F.CreateUserSmallTitles>
              <F.InputButtonBox>
                <F.InputBox>
                  <CreateUser2 type="text" onChange={props.onChangePhoneNum} />
                </F.InputBox>
                <F.AuthButton
                  disabled={!props.phoneCheck}
                  onClick={props.onClickButtons}
                >
                  이메일 찾기
                </F.AuthButton>
              </F.InputButtonBox>
              {props.click && (
                <>
                  <F.CreateUserSmallTitles>이메일</F.CreateUserSmallTitles>
                  <F.CreateUserSmallTitles>
                    {props.data?.findUserEmail}
                  </F.CreateUserSmallTitles>
                </>
              )}
            </F.BodyBox>
            <F.BodyBox>
              <F.SmallHeader>비밀번호 재설정</F.SmallHeader>
              <F.CreateUserSmallTitles>핸드폰</F.CreateUserSmallTitles>
              <F.InputButtonBox>
                <F.InputBox>
                  <CreateUser2 type="text" onChange={props.onChangePhoneNum} />
                </F.InputBox>
                <F.AuthButton onClick={props.onClickPhoneAuth}>
                  인증번호 보내기
                </F.AuthButton>
              </F.InputButtonBox>
              <F.CreateUserSmallTitles>인증번호</F.CreateUserSmallTitles>
              <F.InputButtonBox>
                <F.InputBox>
                  <CreateUser2 type="text" onChange={props.onChangeToken} />
                </F.InputBox>
                <F.AuthButton onClick={props.onClickAuth2}>
                  인증번호 확인
                </F.AuthButton>
              </F.InputButtonBox>
              {props.passwordCheck && (
                <>
                  <F.CreateUserSmallTitles>이메일</F.CreateUserSmallTitles>
                  <F.InputButtonBox>
                    <F.InputBox>
                      <CreateUser2 type="text" onChange={props.onChangeEmail} />
                    </F.InputBox>
                  </F.InputButtonBox>
                  <F.CreateUserSmallTitles>
                    새 비밀번호 입력
                  </F.CreateUserSmallTitles>
                  <F.InputButtonBox>
                    <F.InputBox>
                      <CreateUser2
                        type="password"
                        onChange={props.onChangePassword}
                      />
                    </F.InputBox>
                  </F.InputButtonBox>
                  <F.CreateUserSmallTitles>
                    새 비밀번호 확인
                  </F.CreateUserSmallTitles>
                  <F.InputButtonBox>
                    <F.InputBox>
                      <CreateUser2
                        type="password"
                        onChange={props.onChangeCheck}
                      />
                    </F.InputBox>
                    <F.AuthButton
                      disabled={!props.passwordCheck}
                      onClick={props.onClickReset}
                    >
                      재설정하기
                    </F.AuthButton>
                  </F.InputButtonBox>
                </>
              )}
            </F.BodyBox>
          </F.WrapperBody>
        </div>
      </F.Wrapper>
    </>
  )
}
