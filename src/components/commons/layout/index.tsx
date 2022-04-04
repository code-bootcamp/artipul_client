import { ReactChild } from 'react'
import HeaderContainer from './header/Header.Container'
import FooterContainer from './footer/Footer.Container'
import { useRouter } from 'next/router'
interface IPropsLayout {
  children: ReactChild
}

const HIDDEN_HEADER = ['/', '/aboutUs', '/aboutUs/index.html', '/aboutUs/']
const HIDDEN_FOOTER = [
  '/',
  '/art/artList',
  '/aboutUs',
  '/art/artList/',
  '/aboutUs/index.html'
]

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
