import HeadShake from 'react-reveal/HeadShake'
import styled from '@emotion/styled'
const WarningDiv = styled.div`
  color: red;
`

interface IErrorMessageProps {
  spy: any
  message: string
}

export default function YupErrorMessage(props: IErrorMessageProps) {
  return (
    <HeadShake spy={props.spy}>
      <WarningDiv>{props.message}</WarningDiv>
    </HeadShake>
  )
}
