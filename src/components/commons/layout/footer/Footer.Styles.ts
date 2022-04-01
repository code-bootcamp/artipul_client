import styled from '@emotion/styled'
import { BreakPoints } from '../../../../commons/styles/media'

export const WWrapper = styled.div`
  margin-top: 8rem;
  width: 100%;
  @media ${BreakPoints.tablet} {
    display: none;
  }
  @media ${BreakPoints.mobile} {
    display: none;
  }
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 270px;
  display: flex;
  justify-content: space-between;
`
export const Header = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Gotham';
  color: #f64612;
  padding: 3.5rem 1.2rem;
`
export const Footer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;
`
export const FooterFirst = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
`
export const FooterMenu = styled.div`
  font-size: 0.8rem;
  padding: 0.4rem;
  font-weight: 600;
`
