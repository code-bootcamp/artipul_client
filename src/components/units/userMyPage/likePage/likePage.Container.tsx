import { useQuery } from '@apollo/client'
import { useState } from 'react'
import LikePagePresenter from './likePage.Presenter'
import { FETCH_LIKE_ART, FETCH_LIKE_ART_COUNT } from './likePage.Queries'

export default function LikePageContainer() {
  const { data, refetch } = useQuery(FETCH_LIKE_ART, { variables: { page: 1 } })
  const { data: fetchLikeArtCount } = useQuery(FETCH_LIKE_ART_COUNT)
  const [current, setCurrent] = useState(1)

  const onChange = (page) => {
    setCurrent(page)
    refetch({ page })
  }

  return (
    <LikePagePresenter
      data={data}
      onChange={onChange}
      fetchLikeArtCount={fetchLikeArtCount}
      current={current}
    />
  )
}
