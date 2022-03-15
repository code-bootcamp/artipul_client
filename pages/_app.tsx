import { globalStyles } from '../src/commons/styles/globalStyles'
import { Global } from '@emotion/react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
