import styled from '@emotion/styled'

export const WWrapper = styled.div`
  width: 100%;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 92px;
  display: flex;
  justify-content: space-between;
`
export const Header = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Gotham';
  color: #f64612;
  padding: 1.2rem;
  cursor: pointer;
`
export const Body = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 5rem;
`
export const BodyMenu = styled.div`
  cursor: pointer;
  transition: 0.2s;
  :hover {
    color: orange;
  }
`

export const Footer = styled.div`
  width: 300px;
  display: flex;
  padding-right: 4.5rem;
  justify-content: flex-end;
  align-items: center;
  width: 300px;
`
export const FooterMenu = styled.div`
  padding-left: 1rem;
  cursor: pointer;
  :hover {
    color: #aaaaaa;
  }
`
export const FooterSpan = styled.span`
  padding-left: 1rem;
`
