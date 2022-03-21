import styled from '@emotion/styled'

interface ICreateUserButtonProps {
  isValid: boolean
  checkPhoneAuth: boolean
  nicknameAuth: boolean
}
export const CreateUserButton = styled.button`
  background-color: ${(props: ICreateUserButtonProps) =>
    props.isValid && props.checkPhoneAuth && props.nicknameAuth
      ? 'yellow'
      : 'aliceblue'};
`
