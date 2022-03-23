import styled from '@emotion/styled'

const LoginSmallTitle = styled.div`
  color: orange;
`
interface ILoginSmallTitlesProps {
  title?: string
}

export default function LoginSmallTitles(props: ILoginSmallTitlesProps) {
  return <LoginSmallTitle>{props.title}</LoginSmallTitle>
}
