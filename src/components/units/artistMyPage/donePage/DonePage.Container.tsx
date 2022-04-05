import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { FETCH_PROFILE } from '../../userMyPage/UserMyPage.Queries'
import DonePagePresenter from './DonePage.Presenter'
import {
  FETCH_TIMED_OUT_ART,
  FETCH_TIMED_OUT_ARTS_COUNT
} from './DonePage.Queries'

export default function DonePageContainer() {
  const { data } = useQuery(FETCH_PROFILE)
  const { data: timeOutData, refetch } = useQuery(FETCH_TIMED_OUT_ART, {
    variables: { page: 1 }
  })

  const { data: fetchTimedOutArtsCount } = useQuery(FETCH_TIMED_OUT_ARTS_COUNT)
  const [page, setPage] = useState(1)
  const onChange = (page) => {
    refetch({ page })
    setPage(page)
  }
  return (
    <DonePagePresenter
      data={data}
      page={page}
      timeOutData={timeOutData}
      fetchTimedOutArtsCount={fetchTimedOutArtsCount}
      onChange={onChange}
    />
  )
}
