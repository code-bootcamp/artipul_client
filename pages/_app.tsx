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
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]), // link: 다른 기능을 연결해주겠다는 의미
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
      console.log('굳')
    } catch (e) {
      alert(e.message)
    }
  }

  const tasks = [
    {
      fn: timeToDeadline,
      // this is the function which is triggered based on the config
      id: '1',
      config: '* * * * *', // runs at every minutes
      name: '' // optional
    }
  ]

  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Crontab
          tasks={tasks}
          timeZone="Asia/Seoul"
          // 'UTC', 'local, or 'YOUR PREFERRED TIMEZONE'
          dashboard={{ hidden: true }}
          // if true, dashboard is hidden
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  )
}

export default MyApp

//15bc09bf-ad38-4858-bbad-68d83ad931de
