import styled from '@emotion/styled'

interface ICreateUserButtonProps {
  title?: string
  isValid: boolean
  checkPhoneAuth: boolean
  nicknameAuth: boolean
  disabled: boolean
}
const CreateUserButton = styled.button`
  background-color: ${(props: ICreateUserButtonProps) =>
    props.isValid && props.checkPhoneAuth && props.nicknameAuth
      ? '#f64612'
      : '#eeeeee'};
  color: ${(props: ICreateUserButtonProps) =>
    props.isValid && props.checkPhoneAuth && props.nicknameAuth
      ? 'white'
      : 'black'};
  font-size: 1rem;
  width: 100%;
  height: 55px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
export default function CreateUserButtons(props: ICreateUserButtonProps) {
  return (
    <CreateUserButton
      isValid={props.isValid}
      checkPhoneAuth={props.checkPhoneAuth}
      nicknameAuth={props.nicknameAuth}
      disabled={props.disabled}
    >
      {props.title}
    </CreateUserButton>
  )
}
