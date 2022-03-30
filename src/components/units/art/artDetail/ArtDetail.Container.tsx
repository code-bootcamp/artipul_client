import ArtDetailPresenter from './ArtDetail.Presenter'
import { useMutation, useQuery } from '@apollo/client'
import { FETCH_ART, FETCH_USER, INSTANT_BID } from './ArtDetail.Queries'
import { useRouter } from 'next/router'

export default function ArtDetailContainer() {
  const router = useRouter()
  const [instantBid] = useMutation(INSTANT_BID)
  const { data } = useQuery(FETCH_ART, {
    variables: { artId: String(router.query.id) }
  })

  const { data: dataPoint } = useQuery(FETCH_USER)

  const onClickInstanceBid = async () => {
    if (dataPoint?.fetchUser.point < data?.fetchArt.instant_bid) {
      alert('포인트가 부족합니다!')
    } else {
      try {
        await instantBid({
          variables: {
            artId: String(router.query.id),
            price: data?.fetchArt.instant_bid,
            artistEmail: data?.fetchArt.user.email
          }
        })
        alert('구매가 완료되었습니다.')
        router.push('/mypage')
      } catch (e) {
        alert(e.message)
      }
    }
  }

  return (
    <ArtDetailPresenter
      onClickInstanceBid={onClickInstanceBid}
      data={data?.fetchArt}
    />
  )
}
