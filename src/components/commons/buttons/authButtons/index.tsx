import { MouseEvent } from 'react'

interface IAuthButtonsProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  title: string
  disabled?: boolean
}

export default function AuthButtons(props: IAuthButtonsProps) {
  return (
    <button disabled={props.disabled} onClick={props.onClick}>
      {props.title}
    </button>
  )
}
