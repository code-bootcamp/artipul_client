import { withAuth } from '../../../src/components/commons/hocs/withAuth'
import ReviewWrite from '../../../src/components/units/review/write/ReviewWrite.container'

function ReviewWritePage() {
  return <ReviewWrite />
}
export default withAuth(ReviewWritePage)
