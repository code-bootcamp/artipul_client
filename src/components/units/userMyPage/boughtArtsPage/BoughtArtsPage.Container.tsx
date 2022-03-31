import { useQuery } from '@apollo/client'
import BoughtArtsPagePresenter from './BoughtArtsPage.Presenter'
import {
  FETCH_SOLDOUT_ARTS_COUNT,
  FETCH_TRANSACTION_COMPLETED_ARTS
} from './BoughtArtsPage.Queries'

export default function BoughtArtsPageContainer() {
  const { data, refetch } = useQuery(FETCH_TRANSACTION_COMPLETED_ARTS, {
    variables: { page: 1 }
  })
  const { data: fetchSoldoutArtsCount } = useQuery(FETCH_SOLDOUT_ARTS_COUNT)
  const onChange = (page) => {
    refetch(page)
  }

  return (
    <BoughtArtsPagePresenter
      data={data}
      onChange={onChange}
      fetchSoldoutArtsCount={fetchSoldoutArtsCount}
    />
  )
}
