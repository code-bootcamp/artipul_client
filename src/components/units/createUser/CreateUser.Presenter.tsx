import AuthButtons from '../../commons/buttons/authButtons'
import { CreateUserButton } from '../../commons/buttons/createUser'
import CreateUserSmallTitle from '../../commons/div/createUser'
import YupErrorMessage from '../../commons/errorMessage/yupErrorMessage'
import CreateUserYupInput from '../../commons/inputs/createUser'
import { ICreateUserProps } from './CreateUser.Types'

export default function CreateUserPresenter(props: ICreateUserProps) {
  return (
    <>
      <h1>회원가입</h1>
      <div>
        <CreateUserSmallTitle title="핸드폰" />
        <div>
          <input type="text" onChange={props.onChangePhoneNum} />
        </div>
        <div>
          <AuthButtons onClick={props.onClickPhoneNum} title="인증번호보내기" />
        </div>
        <div>인증번호 입력하기</div>
        <input type="text" onChange={props.onChangeToken} />
      </div>
      <div>
        <button onClick={props.onClickPhoneAuth}>인증번호 확인</button>
      </div>
      <div>
        <CreateUserSmallTitle title="닉네임" />
        <div>
          <div>
            <input type="text" onChange={props.onChangeNickName} />
          </div>
        </div>
        <div>
          <AuthButtons onClick={props.onClickNicknameAuth} title="중복확인" />
        </div>
        <YupErrorMessage
          spy={props.formState.errors.nickname}
          message={props.formState.errors.nickname?.message}
        />
      </div>
      <form onSubmit={props.handleSubmit(props.onClickCreateUser)}>
        <div>
          <CreateUserSmallTitle title="이름" />
          <div>
            <CreateUserYupInput type="text" register={props.register('name')} />
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

        <div>
          <CreateUserButton
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
          >
            회원가입
          </CreateUserButton>
        </div>
      </form>
    </>
  )
}
