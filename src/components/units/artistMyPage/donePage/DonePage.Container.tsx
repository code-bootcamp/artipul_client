import { useQuery } from '@apollo/client'
import { FETCH_PROFILE } from '../../userMyPage/UserMyPage.Queries'
import DonePagePresenter from './DonePage.Presenter'

export default function DonePageContainer() {
  const { data } = useQuery(FETCH_PROFILE)
  return <DonePagePresenter data={data} />
}
