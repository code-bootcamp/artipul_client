import ArtDetailPresenter from './ArtDetail.Presenter'
import { useMutation, useQuery } from '@apollo/client'
import {
  FETCH_ART,
  FETCH_USER,
  INSTANT_BID,
  BID
  // SAVE_BID
} from './ArtDetail.Queries'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function ArtDetailContainer() {
  const router = useRouter()
  const [instantBid] = useMutation(INSTANT_BID)
  const [Bid] = useMutation(BID)
  // const [save_Bid] = useMutation(BID)
  const { data } = useQuery(FETCH_ART, {
    variables: { artId: String(router.query.id) }
  })

  const { data: dataPoint } = useQuery(FETCH_USER)

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [buyPrice, setBuyPrice] = useState(1)

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

  // console.log(dataPoint.fetchUser.point)

  //http://localhost:3000/art/02304f0c-ccd4-4301-9259-9e333440bc0a

  const onClickAcution = () => {
    setIsModalVisible(true)
    setBuyPrice(data?.fetchArt.price + 1)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onChangeBuyPrice = (event) => {
    setBuyPrice(event.target.value)
  }

  const handleOk = async () => {
    console.log(buyPrice, dataPoint?.fetchUser.point)
    if (buyPrice <= dataPoint?.fetchUser.point) {
      if (buyPrice > data?.fetchArt.price) {
        try {
          await Bid({
            variables: {
              artId: String(router.query.id),
              bid_price: Number(buyPrice)
            }
          })
          alert('입찰이 완료되었습니다.')
          router.push('/mypage')
        } catch (e) {
          alert(e.message)
        }
      } else {
        alert('입찰금액을 더 높게 입력하세요!')
      }
    } else {
      alert('포인트가 부족합니다.')
    }
  }

  // const useBid = async () => {
  //   await Bid({
  //     variables: {
  //       artId: String(router.query.id),
  //       bid_price: buyPrice
  //     }
  //   })
  // }

  return (
    <ArtDetailPresenter
      onClickInstanceBid={onClickInstanceBid}
      onClickAcution={onClickAcution}
      data={data?.fetchArt}
      isModalVisible={isModalVisible}
      userPoint={dataPoint?.fetchUser.point}
      handleOk={handleOk}
      handleCancel={handleCancel}
      onChangeBuyPrice={onChangeBuyPrice}
    />
  )
}
