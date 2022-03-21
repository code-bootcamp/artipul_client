import styled from '@emotion/styled'

const CreateUserSmallTitles = styled.div`
  color: blueviolet;
`
interface ICreateUserSmallTitlesProps {
  title?: string
}

export default function CreateUserSmallTitle(
  props: ICreateUserSmallTitlesProps
) {
  return <CreateUserSmallTitles>{props.title}</CreateUserSmallTitles>
}
