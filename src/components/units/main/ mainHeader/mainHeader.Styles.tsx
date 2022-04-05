import styled from '@emotion/styled'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUser } from 'react-icons/fa'
import { BreakPoints } from '../../../../commons/styles/media'

export const Hamburger = styled(GiHamburgerMenu)`
  font-size: 2rem;
  margin-right: 1.5rem;
  display: none;
  cursor: pointer;
  @media ${BreakPoints.tablet} {
    display: block;
  }
  @media ${BreakPoints.mobile} {
    display: block;
  }
`
export const HamburgerWrap = styled.div`
  display: none;
  .anticon {
    color: #f64612;
  }
  color: orange;
  @media ${BreakPoints.tablet} {
    display: block;
  }
  @media ${BreakPoints.mobile} {
    display: block;
  }
`
export const User = styled(FaUser)`
  font-size: 2rem;
  display: none;
  cursor: pointer;
  @media ${BreakPoints.tablet} {
    display: block;
  }
  @media ${BreakPoints.mobile} {
    display: block;
  }
`
export const WWrapper = styled.div`
  width: 120rem;
  position: absolute;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.5);
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 92px;
  display: flex;
  justify-content: space-between;
`
export const Header = styled.div`
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
  @media ${BreakPoints.tablet} {
    display: none;
  }
  @media ${BreakPoints.mobile} {
    display: none;
  }
`
export const BodyMenu = styled.div`
  cursor: pointer;
  transition: 0.2s;
  :hover {
    color: orange;
  }
`
export const FooterWeb = styled.div`
  width: 100%;
  display: flex;
  @media ${BreakPoints.tablet} {
    display: none;
  }
  @media ${BreakPoints.mobile} {
    display: none;
  }
`
export const Footer = styled.div`
  width: 260px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 300px;
  padding-right: 2rem;
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
