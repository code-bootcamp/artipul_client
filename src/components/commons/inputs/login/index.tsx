import styled from '@emotion/styled'
import { ChangeEvent } from 'react'

interface ILoginInputsProps {
  id: string
  type: string
  onChange: (event: ChangeEvent) => string
  placeholder: string
}

const LoginInput = styled.input``

export default function LoginInputs(props: ILoginInputsProps) {
  return (
    <LoginInput
      id={props.id}
      type={props.type}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  )
}
