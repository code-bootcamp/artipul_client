import { ReactChild } from 'react'
import HeaderContainer from './header/Header.Container'
import FooterContainer from './footer/Footer.Container'
import { useRouter } from 'next/router'
interface IPropsLayout {
  children: ReactChild
}

const HEDDEN_LAYOUT = ['/']

export default function Layout(props: IPropsLayout) {
  const router = useRouter()

  return (
    <>
      {router.asPath === HEDDEN_LAYOUT[0] || <HeaderContainer />}
      {props.children}
      {router.asPath === HEDDEN_LAYOUT[0] || <FooterContainer />}
    </>
  )
}
