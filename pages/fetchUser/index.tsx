import { gql, useQuery } from '@apollo/client'

const FETCH = gql`
  query fetchUser {
    fetchUser {
      nickname
    }
  }
`
export default function Fetch() {
  const { data } = useQuery(FETCH)

  return (
    <>
      <h1>로그인 후 이동하는 페이지</h1>
      <div>{data?.fetchUser.nickname}</div>
    </>
  )
}
