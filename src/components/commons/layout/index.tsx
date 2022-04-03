import { ReactChild } from 'react'
import HeaderContainer from './header/Header.Container'
import FooterContainer from './footer/Footer.Container'
import { useRouter } from 'next/router'
interface IPropsLayout {
  children: ReactChild
}

<<<<<<< HEAD
const HIDDEN_HEADER = ['/', '/aboutUs', '/aboutUs/index.html']
const HIDDEN_FOOTER = ['/', '/art/artList', '/aboutUs', '/art/artList/']
=======
const HIDDEN_HEADER = ['/', '/aboutUs/index.html']
const HIDDEN_FOOTER = ['/', '/art/artList', '/aboutUs/index.html']
>>>>>>> 7f88cc19aac3294cff353401ac78c40666a2f8db

export default function Layout(props: IPropsLayout) {
  const router = useRouter()

  return (
    <>
      {HIDDEN_HEADER.includes(router.asPath) || <HeaderContainer />}
      {props.children}
      {HIDDEN_FOOTER.includes(router.asPath) || <FooterContainer />}
    </>
  )
}
