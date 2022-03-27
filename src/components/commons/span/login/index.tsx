import styled from '@emotion/styled'

interface ILoginSpansProps {
  onClick?: () => void
  title: string
}

const LoginSpan = styled.span`
  width: 100%;
  font-size: 1rem;
  font-weight: 700, Bold;
  text-align: center;
  padding-top: 24px;
  color: #aaaaaa;
  cursor: pointer;
  :hover {
    color: #333333;
  }
`

export default function LoginSpans(props: ILoginSpansProps) {
  return <LoginSpan onClick={props.onClick}>{props.title}</LoginSpan>
}
