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
import Layout from '../src/components/commons/layout'
import 'antd/dist/antd.css'
import Crontab from 'reactjs-crontab'
import 'reactjs-crontab/dist/index.css'
import { gql } from '@apollo/client'
import { GraphQLClient } from 'graphql-request'
import Head from 'next/head'
import { warningModal } from '../src/components/commons/Modal'

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
    uri: 'https://daseul.shop/graphql',
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: 'include'
  })

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache()
  })

  const CHECK_TIMEDOUT_AND_PROCESS = gql`
    mutation checkTimedoutAndProcess {
      checkTimedoutAndProcess
    }
  `

  const timeToDeadline = async () => {
    try {
      const graphqlClient_1 = new GraphQLClient('https://daseul.shop/graphql')
      await graphqlClient_1.request(CHECK_TIMEDOUT_AND_PROCESS)
    } catch (e) {
      warningModal(e.message)
    }
  }

  const tasks = [
    {
      fn: timeToDeadline,

      id: '1',
      config: '* * * * *',
      name: ''
    }
  ]

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Crontab
          tasks={tasks}
          timeZone="Asia/Seoul"
          dashboard={{ hidden: true }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  )
}

export default MyApp
