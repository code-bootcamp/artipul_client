import styled from '@emotion/styled'
import { MouseEvent } from 'react'

interface IAuthButtonsProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  title: string
  disabled?: boolean
}

const LoginAuthButton = styled.button`
  width: 100%;
  height: 64px;
  font-size: 1rem;
  font-weight: 700, Bold;
  transition: 0.4s;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #f64612;
  }
`

export default function LoginAuthButtons(props: IAuthButtonsProps) {
  return (
    <LoginAuthButton disabled={props.disabled} onClick={props.onClick}>
      {props.title}
    </LoginAuthButton>
  )
}
