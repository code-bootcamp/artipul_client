import styled from '@emotion/styled'
import { UseFormRegisterReturn } from 'react-hook-form'

interface IYupInputsProps {
  type?: string
  register: UseFormRegisterReturn
  placeholder?: string
  maxLength?: number
}

const CreateUserYupInputs = styled.input`
  outline: 0;
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid #cccccc;
  font-size: 1.1rem;
  padding-top: 1rem;
  margin-bottom: 12px;
`

export default function CreateUserYupInput(props: IYupInputsProps) {
  return (
    <CreateUserYupInputs
      maxLength={props.maxLength}
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
    />
  )
}
