import styled from '@emotion/styled'
import { MouseEvent } from 'react'

interface IAuthButtonsProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  title: string
  disabled?: boolean
}

const LoginAuthButton = styled.button``

export default function LoginAuthButtons(props: IAuthButtonsProps) {
  return (
    <LoginAuthButton disabled={props.disabled} onClick={props.onClick}>
      {props.title}
    </LoginAuthButton>
  )
}
