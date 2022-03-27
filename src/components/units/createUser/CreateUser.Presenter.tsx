import AuthButtons from '../../commons/buttons/authButtons'
import CreateUserButtons from '../../commons/buttons/createUser'
import CreateUserSmallTitle from '../../commons/div/createUser'
import YupErrorMessage from '../../commons/errorMessage/yupErrorMessage'
import CreateUserYupInput from '../../commons/inputs/createUser'
import { ICreateUserProps } from './CreateUser.Types'
import * as C from './CreateUser.Styles'
import CreateUser2 from '../../commons/inputs/createUser2'

export default function CreateUserPresenter(props: ICreateUserProps) {
  return (
    <C.Wrapper>
      <div>
        <C.Header>회원가입</C.Header>
        <div>
          <CreateUserSmallTitle title="핸드폰" />
          <C.InputButtonBox>
            <C.InputBox>
              <CreateUser2 type="text" onChange={props.onChangePhoneNum} />
            </C.InputBox>
            <AuthButtons onClick={props.onClickPhoneNum} title="인증번호발송" />
          </C.InputButtonBox>
          <YupErrorMessage
            spy={props.warningPhone}
            message={props.warningPhone}
          />
        </div>
        <div>
          <CreateUserSmallTitle title="인증번호" />
          <C.InputButtonBox>
            <C.InputBox>
              <CreateUser2 type="text" onChange={props.onChangeToken} />
            </C.InputBox>
            <AuthButtons
              disabled={!props.isCheckPhoneNum}
              onClick={props.onClickPhoneAuth}
              title="확인"
            />
          </C.InputButtonBox>
          <div>
            {props.minSec && (
              <C.Count>
                {String(props.min).padStart(2, '0')} :{' '}
                {String(props.sec).padStart(2, '0')}
              </C.Count>
            )}
          </div>
        </div>
        <div>
          <CreateUserSmallTitle title="닉네임" />
          <C.InputButtonBox>
            <C.InputBox>
              <CreateUser2 type="text" onChange={props.onChangeNickName} />
            </C.InputBox>
            <AuthButtons onClick={props.onClickNicknameAuth} title="중복확인" />
          </C.InputButtonBox>
          <YupErrorMessage
            spy={props.warningNickname}
            message={props.warningNickname}
          />
        </div>
        <form onSubmit={props.handleSubmit(props.onClickCreateUser)}>
          <div>
            <CreateUserSmallTitle title="이름" />
            <div>
              <CreateUserYupInput
                type="text"
                register={props.register('name')}
              />
            </div>
            <YupErrorMessage
              spy={props.formState.errors.name}
              message={props.formState.errors.name?.message}
            />
          </div>
          <div>
            <CreateUserSmallTitle title="이메일" />
            <div>
              <CreateUserYupInput
                type="text"
                placeholder={'ex) artpul@gmail.com'}
                register={props.register('email')}
              />
            </div>
            <YupErrorMessage
              spy={props.formState.errors.email}
              message={props.formState.errors.email?.message}
            />
          </div>
          <div>
            <CreateUserSmallTitle title="비밀번호" />
            <div>
              <CreateUserYupInput
                placeholder={'특수문자(!@#$..) 포함 4자 이상, 15자 이하'}
                maxLength={16}
                type="password"
                register={props.register('password')}
              />
            </div>
            <YupErrorMessage
              spy={props.formState.errors.password}
              message={props.formState.errors.password?.message}
            />
          </div>
          <div>
            <CreateUserSmallTitle title="비밀번호 확인" />
            <div>
              <CreateUserYupInput
                maxLength={16}
                type="password"
                register={props.register('checkpassword')}
              />
            </div>
            <YupErrorMessage
              spy={props.formState.errors.checkpassword}
              message={props.formState.errors.checkpassword?.message}
            />
          </div>
          {props.isArtist && (
            <div>
              <CreateUserSmallTitle title="대학교 입력" />
              <div>
                <CreateUserYupInput
                  placeholder={'ex) ㅇㅇ대학교'}
                  type="text"
                  register={props.register('college')}
                />
              </div>
              <YupErrorMessage
                spy={props.formState.errors.college}
                message={props.formState.errors.college?.message}
              />
            </div>
          )}

          <C.SubmitButtonBox>
            <CreateUserButtons
              isValid={props.formState.isValid}
              checkPhoneAuth={props.checkPhoneAuth}
              nicknameAuth={props.nicknameAuth}
              disabled={
                !(
                  props.formState.isValid &&
                  props.checkPhoneAuth &&
                  props.nicknameAuth
                )
              }
              title="회원가입"
            />
          </C.SubmitButtonBox>
        </form>
      </div>
    </C.Wrapper>
  )
}
