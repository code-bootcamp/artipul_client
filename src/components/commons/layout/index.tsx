import { ReactChild } from 'react'
import HeaderContainer from './header/Header.Container'
import FooterContainer from './footer/Footer.Container'

interface IPropsLayout {
  children: ReactChild
}

export default function Layout(props: IPropsLayout) {
  return (
    <>
      <HeaderContainer />
      {props.children}
      <FooterContainer />
    </>
  )
}
