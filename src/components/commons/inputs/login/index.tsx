import styled from '@emotion/styled'
import { ChangeEvent } from 'react'

interface ILoginInputsProps {
  id: string
  type: string
  onChange: (event: ChangeEvent) => string
}

const LoginInput = styled.input`
  width: 100%;
  /* min-width: 90%; */
  height: 50px;
  border: none;
  border-bottom: 1px solid #cccccc;
  font-size: 1.2rem;
  padding-top: 1rem;
  padding-left: 5px;
  margin-bottom: 24px;
  outline: 0;
`

export default function LoginInputs(props: ILoginInputsProps) {
  return (
    <LoginInput id={props.id} type={props.type} onChange={props.onChange} />
  )
}
