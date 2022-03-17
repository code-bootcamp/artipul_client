import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../../pages/_app'
import { getAccessToken } from '../../../commons/libraries/refreshAccessToken'

export function useAuth() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const { accessToken } = useContext(GlobalContext)

  useEffect(() => {
    async function needLogin() {
      if (!accessToken) {
        const newAccessToken = await getAccessToken()
        if (!newAccessToken) {
          alert('로그인이 필요한 서비스 입니다.')
          router.push('/Login')
        } else {
          setIsLoading(false)
        }
      } else {
        setIsLoading(false)
      }
    }
    needLogin()
  }, [accessToken])

  return {
    isLoading
  }
}
