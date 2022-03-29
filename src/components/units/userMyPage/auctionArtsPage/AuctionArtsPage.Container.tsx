import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import AuctionArtsPagePresenter from './AuctionArtsPage.Presenter'
import { FETCH_AUCTION_ARTS } from './AuctionArtsPage.Queries'

export default function AuctionArtsPageContainer() {
  const router = useRouter()

  const onClickArtDetail = (el) => () => {
    router.push(`/art/${el.id}`)
  }

  const { data, refetch } = useQuery(FETCH_AUCTION_ARTS, {
    variables: { page: 1 }
  })

  const onChangePage = (page) => {
    refetch({ page })
  }
  return (
    <AuctionArtsPagePresenter
      data={data}
      onClickArtDetail={onClickArtDetail}
      onChangePage={onChangePage}
    />
  )
}
