import styled from '@emotion/styled'

interface ILoginSpansProps {
  onClick?: () => void
  title: string
}

const LoginSpan = styled.span``

export default function LoginSpans(props: ILoginSpansProps) {
  return <LoginSpan onClick={props.onClick}>{props.title}</LoginSpan>
}
