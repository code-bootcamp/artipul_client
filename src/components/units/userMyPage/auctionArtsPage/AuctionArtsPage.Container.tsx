import { useQuery } from '@apollo/client'
import AuctionArtsPagePresenter from './AuctionArtsPage.Presenter'
import { FETCH_AUCTION_ARTS } from './AuctionArtsPage.Queries'

export default function AuctionArtsPageContainer() {
  const { data } = useQuery(FETCH_AUCTION_ARTS)

  return <AuctionArtsPagePresenter data={data} />
}
