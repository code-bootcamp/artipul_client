import { GraphQLClient, gql } from 'graphql-request'
// import { gql } from '@apollo/client'

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`

export async function getAccessToken() {
  try {
    const graphqlClient = new GraphQLClient(
      'https://mybackend.arios67.shop/graphql',
      {
        credentials: 'include'
      }
    )
    const result = await graphqlClient.request(RESTORE_ACCESS_TOKEN)
    const newAccessToken = result.restoreAccessToken.accessToken

    return newAccessToken
  } catch (error) {
    console.log(error.message)
  }
}
