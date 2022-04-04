import ArtDetailPresenter from './ArtDetail.Presenter'
import { useMutation, useQuery } from '@apollo/client'
import {
  FETCH_ART,
  FETCH_USER,
  INSTANT_BID,
  BID,
  FETCH_LIKE_ART,
  ADD_LIKE_ART
} from './ArtDetail.Queries'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { io } from 'socket.io-client'
import { successModal, warningModal } from '../../../commons/Modal'

export default function ArtDetailContainer() {
  const router = useRouter()
  const { data, refetch } = useQuery(FETCH_ART, {
    variables: { artId: String(router.query.id) }
  })
  const [price, setPrice] = useState(data?.fetchArt.price)
  const { data: fetchLikeArts, refetch: refetchLikeArts } =
    useQuery(FETCH_LIKE_ART)

  const [instantBid] = useMutation(INSTANT_BID)
  const [Bid] = useMutation(BID)
  useEffect(() => {
    setPrice(data?.fetchArt.price)
  }, [data])
  const { data: dataPoint } = useQuery(FETCH_USER)

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [buyPrice, setBuyPrice] = useState(1)
  const [addLikeArt] = useMutation(ADD_LIKE_ART)
  const [likeData, setLikeData] = useState([])

  useEffect(() => {
    const socket = io(`https://daseul.shop/${router.query.id}`)

    socket.on('message', (message) => {
      if (message.artId === router.query.id) {
        setPrice(message.price)
      }
    })
  }, [])

  useEffect(() => {
    onFetchLikeArt()
  }, [fetchLikeArts])

  const onFetchLikeArt = () => {
    const tempFetchLikeArtId = []
    fetchLikeArts?.fetchLikeArt.map((el) => {
      tempFetchLikeArtId.push(el.id)
    })
    setLikeData(tempFetchLikeArtId)
  }

  const onClickInstanceBid = async () => {
    if (dataPoint?.fetchUser.point < data?.fetchArt.instant_bid) {
      warningModal('포인트가 부족합니다!')
    } else {
      try {
        await instantBid({
          variables: {
            artId: String(router.query.id),
            price: data?.fetchArt.instant_bid,
            artistEmail: data?.fetchArt.user.email
          }
        })
        successModal('구매가 완료되었습니다.')
        router.push('/mypage')
      } catch (e) {
        warningModal(e.message)
      }
    }
  }

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
    if (buyPrice <= dataPoint?.fetchUser.point) {
      if (buyPrice > data?.fetchArt.price) {
        if (buyPrice < data?.fetchArt.instant_bid) {
          try {
            await Bid({
              variables: {
                artId: String(router.query.id),
                bid_price: Number(buyPrice)
              }
            })
            setIsModalVisible(false)
            successModal('입찰이 완료되었습니다.')
            await refetch({ artId: String(router.query.id) })
          } catch (e) {
            warningModal(e.message)
          }
        } else {
          warningModal('입찰금액이 즉시 구매가보다 높거나 같습니다!')
        }
      } else {
        warningModal('입찰금액을 더 높게 입력하세요!')
      }
    } else {
      warningModal('포인트가 부족합니다.')
    }
  }

  const onClickLike = async (event) => {
    try {
      await addLikeArt({
        variables: { artId: event.currentTarget.id }
      })
      try {
        refetchLikeArts()
      } catch (e) {
        warningModal(e.message)
      }
    } catch (e) {
      warningModal(e.message)
    }
  }

  const onClickArtist = () => {
    router.push(`/art/${router.query.id}/artistIntroduce`)
  }

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
      onClickLike={onClickLike}
      onClickArtist={onClickArtist}
      id={router.query.id}
      is_artist={dataPoint?.fetchUser.is_artist}
      likeData={likeData}
      price={price}
    />
  )
}
