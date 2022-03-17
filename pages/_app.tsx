import { Global } from '@emotion/react'
import { globalStyles } from '../src/commons/styles/globalStyles'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState
} from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { createUploadLink } from 'apollo-upload-client'
import { useRouter } from 'next/router'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { getAccessToken } from '../src/commons/libraries/refreshAccessToken'

interface IGlobalContext {
  accessToken?: string
  setAccessToken?: Dispatch<SetStateAction<string>>
}

export const GlobalContext = createContext<IGlobalContext>({})

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState('')

  const value = {
    accessToken,
    setAccessToken
  }
  const router = useRouter()
  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken)
    })
  }, [router])

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code == 'UNAUTHENTICATED') {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken)
            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`
              }
            })
            return forward(operation)
          })
        }
      }
    }
  })

  const uploadLink = createUploadLink({
    uri: 'https://backend05.codebootcamp.co.kr/graphql',
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: 'include'
  })

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]), // link: 다른 기능을 연결해주겠다는 의미
    cache: new InMemoryCache()
  })

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </ApolloProvider>
    </GlobalContext.Provider>
  )
}

export default MyApp
