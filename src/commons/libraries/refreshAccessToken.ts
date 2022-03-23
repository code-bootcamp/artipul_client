import { GraphQLClient } from 'graphql-request'
import { gql } from '@apollo/client'

const RESTORE_ACESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`

export async function getAccessToken() {
  try {
    const graphqlClient = new GraphQLClient(
      'http://34.64.39.249:3000/graphql',
      {
        credentials: 'include'
      }
    )
    const result = await graphqlClient.request(RESTORE_ACESS_TOKEN)
    const newAccessToken = result.restoreAccessToken.accessToken

    return newAccessToken
  } catch (error) {
    console.log(error.message)
  }
}
