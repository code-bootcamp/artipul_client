import AboutUsContentPresenter from './AboutUsContent.Presenter'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client'

const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      is_artist
    }
  }
`

export default function AboutUsContentContainer() {
  const [floor, setFloor] = useState('1F')
  const [map, setMap] = useState('1')
  const router = useRouter()
  const [is_artist, setIsArtist] = useState(false)

  const onClickFloor = (event) => {
    setFloor(event.currentTarget.id)
  }

  const onClickMap = (event) => {
    setMap(event.target.id)
  }

  const onClickAddArt = () => {
    router.push('/createArt')
  }

  const { data } = useQuery(FETCH_USER)

  const onCheckIsArtist = () => {
    if (data?.fetchUser.is_artist) {
      setIsArtist(true)
    }
  }

  useEffect(() => {
    onCheckIsArtist()
  }, [data])

  return (
    <AboutUsContentPresenter
      onClickFloor={onClickFloor}
      floor={floor}
      onClickMap={onClickMap}
      onClickAddArt={onClickAddArt}
      map={map}
      is_artist={is_artist}
    />
  )
}
