import ArtDetailPresenter from './ArtDetail.Presenter'
import { useQuery } from '@apollo/client'
import { FETCH_ART } from './ArtDetail.Queries'
import { useRouter } from 'next/router'

export default function ArtDetailContainer() {
  const router = useRouter()
  const { data } = useQuery(FETCH_ART, {
    variables: { artId: String(router.query.id) }
  })

  return <ArtDetailPresenter data={data?.fetchArt} />
}
