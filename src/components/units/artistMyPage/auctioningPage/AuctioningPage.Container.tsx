import { useQuery } from '@apollo/client'
import AuctioningPagePresenter from './AuctioningPage.Presenter'
import {
  FETCH_AUCTION_ARTS,
  FETCH_AUCTION_ARTS_COUNT
} from './AuctioningPage.Queries'

export default function AuctioningPageContainer() {
  const { data, refetch } = useQuery(FETCH_AUCTION_ARTS, {
    variables: { page: 1 }
  })
  const onChange = (page) => {
    refetch(page)
  }
  const { data: fetchAuctionArtsCount } = useQuery(FETCH_AUCTION_ARTS_COUNT)
  return (
    <AuctioningPagePresenter
      data={data}
      fetchAuctionArtsCount={fetchAuctionArtsCount}
      onChange={onChange}
    />
  )
}
