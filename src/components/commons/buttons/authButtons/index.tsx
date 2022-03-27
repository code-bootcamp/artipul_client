import styled from '@emotion/styled'
import { MouseEvent } from 'react'

interface IAuthButtonsProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  title: string
  disabled?: boolean
}

const AuthButton = styled.button`
  width: 38%;
  height: 40px;
  margin-left: 10px;
  font-size: 0.9rem;
  background-color: '#eeeeee';
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    background-color: #f64612;
    color: white;
  }
`

export default function AuthButtons(props: IAuthButtonsProps) {
  return (
    <AuthButton disabled={props.disabled} onClick={props.onClick}>
      {props.title}
    </AuthButton>
  )
}
