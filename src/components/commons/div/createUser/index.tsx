import styled from '@emotion/styled'

interface ICreateUserSmallTitlesProps {
  title?: string
}
const CreateUserSmallTitles = styled.div`
  color: blueviolet;
`
export default function CreateUserSmallTitle(
  props: ICreateUserSmallTitlesProps
) {
  return <CreateUserSmallTitles>{props.title}</CreateUserSmallTitles>
}
