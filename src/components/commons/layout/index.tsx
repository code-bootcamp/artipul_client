import { ReactChild } from 'react'
import HeaderContainer from './header/Header.Container'
import FooterContainer from './footer/Footer.Container'
import { useRouter } from 'next/router'
interface IPropsLayout {
  children: ReactChild
}

const HIDDEN_HEADER = ['/']
const HIDDEN_FOOTER = ['/', '/art/artList']

export default function Layout(props: IPropsLayout) {
  const router = useRouter()

  return (
    <>
      {router.asPath === HIDDEN_HEADER[0] || <HeaderContainer />}
      {props.children}
      {HIDDEN_FOOTER.includes(router.asPath) || <FooterContainer />}
    </>
  )
}
