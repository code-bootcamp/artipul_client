import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import AuctionArtsPagePresenter from './AuctionArtsPage.Presenter'
import { FETCH_ENGAGE_COUNT, FETCH_ENGAGING } from './AuctionArtsPage.Queries'
import { IFetchEngagingProps } from './AuctionArtsPage.Types'

export default function AuctionArtsPageContainer() {
  const router = useRouter()
  const { data, refetch } = useQuery(FETCH_ENGAGING, { variables: { page: 1 } })
  const { data: fetchEngageCount } = useQuery(FETCH_ENGAGE_COUNT)
  const onClickArtDetail = (el: IFetchEngagingProps) => () => {
    router.push(`/art/${el.art.id}`)
  }
  const [page, setPage] = useState(1)

  const onChangePage = (page: any) => {
    refetch({ page })
    setPage(page)
  }
  return (
    <AuctionArtsPagePresenter
      data={data}
      page={page}
      onClickArtDetail={onClickArtDetail}
      onChangePage={onChangePage}
      fetchEngageCount={fetchEngageCount}
    />
  )
}
