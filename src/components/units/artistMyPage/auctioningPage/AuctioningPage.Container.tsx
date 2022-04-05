import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import AuctioningPagePresenter from './AuctioningPage.Presenter'
import {
  FETCH_AUCTION_ARTS,
  FETCH_AUCTION_ARTS_COUNT
} from './AuctioningPage.Queries'

export default function AuctioningPageContainer() {
  const router = useRouter()
  const { data, refetch } = useQuery(FETCH_AUCTION_ARTS, {
    variables: { page: 1 }
  })
  const [page, setPage] = useState(1)

  const onChange = (page) => {
    refetch({ page })
    setPage(page)
  }
  const onClickDetail = (el) => () => {
    router.push(`/art/${el.id}`)
  }
  const { data: fetchAuctionArtsCount } = useQuery(FETCH_AUCTION_ARTS_COUNT)
  return (
    <AuctioningPagePresenter
      data={data}
      page={page}
      fetchAuctionArtsCount={fetchAuctionArtsCount}
      onChange={onChange}
      onClickDetail={onClickDetail}
    />
  )
}
