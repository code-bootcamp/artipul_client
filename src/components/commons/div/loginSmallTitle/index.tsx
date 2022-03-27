import styled from '@emotion/styled'

const LoginSmallTitle = styled.div`
  font-size: 1rem;
  font-weight: 700, Bold;
  margin-bottom: 5px;
`
interface ILoginSmallTitlesProps {
  title?: string
}

export default function LoginSmallTitles(props: ILoginSmallTitlesProps) {
  return <LoginSmallTitle>{props.title}</LoginSmallTitle>
}
