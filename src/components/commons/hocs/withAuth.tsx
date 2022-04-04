/* eslint-disable react/display-name */
import { useRouter } from 'next/router'
import { ComponentType, useContext, useEffect } from 'react'
import { GlobalContext } from '../../../../pages/_app'
import { getAccessToken } from '../../../commons/libraries/refreshAccessToken'
import { warningModal } from '../Modal'

export const withAuth =
  (Component: ComponentType) =>
  <P extends `Record<string, never>`>(props: P) => {
    const router = useRouter()
    const { accessToken } = useContext(GlobalContext)
    useEffect(() => {
      async function login() {
        if (!accessToken) {
          const newAccessToken = await getAccessToken()
          if (!newAccessToken) {
            warningModal('로그인이 필요한 페이지입니다.')
            router.push('/login')
          }
        }
      }
      login()
    }, [])
    return <Component {...props} />
  }
