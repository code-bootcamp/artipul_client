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
import { useState, useRef, useEffect } from 'react'
import { io } from 'socket.io-client'
interface IMsg {
  user: string
  msg: string
}

const user = 'User_' + String(new Date().getTime()).substr(-3)

export default function ArtDetailContainer() {
  const router = useRouter()
  const { data, refetch } = useQuery(FETCH_ART, {
    variables: { artId: String(router.query.id) }
  })
  const [price, setPrice] = useState(data?.fetchArt.price)
  ////////////////////////////////

  const [connected, setConnected] = useState<boolean>(false)

  // init chat and message
  const [chat, setChat] = useState<IMsg[]>([])
  const [msg, setMsg] = useState<string>('')
  const inputRef = useRef(null)

  useEffect(() => {
    const socket = io(`https://daseul.shop/${router.query.id}`)
    socket.on('connect', () => {
      console.log('SOCKET CONNECTED!', socket.id)
      setConnected(true)
    })
    socket.on('message', (message) => {
      console.log(message.artId)
      if (message.artId === router.query.id) {
        setPrice(message.price)
      }
    })
  }, [])

  /////////////////////////////

  const [instantBid] = useMutation(INSTANT_BID)
  const [Bid] = useMutation(BID)
  useEffect(() => {
    setPrice(data?.fetchArt.price)
  }, [data])
  console.log('price :', data?.fetchArt.price)
  const { data: dataPoint } = useQuery(FETCH_USER)

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [buyPrice, setBuyPrice] = useState(1)
  const { data: fetchLikeArts, refetch: refetchLikeArts } =
    useQuery(FETCH_LIKE_ART)
  const [addLikeArt] = useMutation(ADD_LIKE_ART)
  const [likeData, setLikeData] = useState([])

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
          setIsModalVisible(false)
          await refetch({ artId: String(router.query.id) })
          // router.push('/mypage')
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

  const onClickLike = async (event) => {
    if (event.stopPropagation) {
      event.stopPropagation()
    }
    event.cancelBubble = true
    try {
      await addLikeArt({
        variables: { artId: event.currentTarget.id }
      })
      try {
        await refetchLikeArts()
        const tempFetchLikeArtId = []
        fetchLikeArts.fetchLikeArt.map((el) => {
          tempFetchLikeArtId.push(el.id)
        })
        setLikeData(tempFetchLikeArtId)
      } catch (e) {
        alert(e.message)
      }
    } catch (e) {
      alert(e.message)
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
