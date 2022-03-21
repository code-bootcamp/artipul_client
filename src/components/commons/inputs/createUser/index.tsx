import { UseFormRegisterReturn } from 'react-hook-form'

interface IYupInputsProps {
  type?: string
  register: UseFormRegisterReturn
  placeholder?: string
  maxLength?: number
}

export default function CreateUserYupInput(props: IYupInputsProps) {
  return (
    <input
      maxLength={props.maxLength}
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
    />
  )
}
