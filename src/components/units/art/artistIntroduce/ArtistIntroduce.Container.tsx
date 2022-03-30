import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import ArtistIntroducePresenter from './ArtistIntroduce.Presenter'
import {
  FETCH_ARTIST_PROFILE,
  FETCH_ARTIST_WORKS
} from './ArtistIntroduce.Queries'

export default function ArtistIntroduceContainer() {
  const router = useRouter()
  //   c8f924ae-60fd-4050-9dca-f261b885719d
  const { data: profileData } = useQuery(FETCH_ARTIST_PROFILE, {
    variables: { artId: router.query.id }
  })
  const { data } = useQuery(FETCH_ARTIST_WORKS, {
    variables: { artId: router.query.id }
  })

  return <ArtistIntroducePresenter data={data} profileData={profileData} />
}
