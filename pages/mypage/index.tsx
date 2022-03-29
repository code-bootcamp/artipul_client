import { withAuth } from '../../src/components/commons/hocs/withAuth'
import UserMyPageContainer from '../../src/components/units/userMyPage/UserMyPage.Container'

function UserMyPagePage() {
  return <UserMyPageContainer />
}

export default withAuth(UserMyPagePage)

// export default function UserMyPage() {
//   return <UserMyPageContainer />
// }
