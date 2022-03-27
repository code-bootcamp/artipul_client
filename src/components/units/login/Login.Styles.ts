import styled from '@emotion/styled'

export const Header = styled.h1`
  font-weight: 700, Bold;
  font-size: 2.188rem;
  color: #f64612;
  margin-bottom: 5rem;
  opacity: 0.8;
  font-family: 'Gotham';
`

export const Wrapper = styled.div`
  width: 100%;
  padding: 100px 10px;
  position: relative;
  > div {
    max-width: 440px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
`
export const WrapperInputBox = styled.div`
  width: 100%;
`
export const ButtonBox = styled.div`
  width: 100%;
  margin-top: 16px;
`
export const SpanBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const SocialLoginBox = styled.div`
  padding-top: 60px;
  width: 100%;
`
