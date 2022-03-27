import styled from '@emotion/styled'

interface ISocialLoginButtonProps {
  title: string
  src?: string
}
const ButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  position: relative;
`
const LogoImage = styled.img`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 25%;
  left: 5%;
`

const SocialLoginButton = styled.div`
  width: 100%;
  height: 64px;
  border: 1px solid #aaaaaa;
  border-radius: 7px;
  font-size: 1rem;
  font-weight: 700, Bold;
  line-height: 64px;
  text-align: center;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`

export default function SocialLoginButtons(props: ISocialLoginButtonProps) {
  return (
    <ButtonWrapper>
      <LogoImage src={props.src} />
      <SocialLoginButton>{props.title}</SocialLoginButton>
    </ButtonWrapper>
  )
}
