import { MouseEvent } from 'react'

interface IAuthButtonsProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  title: string
}

export default function AuthButtons(props: IAuthButtonsProps) {
  return <button onClick={props.onClick}>{props.title}</button>
}
