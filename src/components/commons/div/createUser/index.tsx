import styled from '@emotion/styled'

interface ICreateUserSmallTitlesProps {
  title?: string
}
const CreateUserSmallTitles = styled.div`
  font-size: 1rem;
  font-weight: 700;
  padding-top: 24px;
`
export default function CreateUserSmallTitle(
  props: ICreateUserSmallTitlesProps
) {
  return <CreateUserSmallTitles>{props.title}</CreateUserSmallTitles>
}
