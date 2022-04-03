import { useEffect, useState } from 'react'
import ArtListPresenter from './ArtList.Presenter'
import {
  FETCH_ARTS,
  FETCH_LIKE_ART,
  ADD_LIKE_ART,
  FETCH_USER
} from './ArtList.Queries'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

export default function ArtListContainer() {
  const [artCategory, setArtCategory] = useState(['회화'])
  const [page, setPage] = useState(0)
  const { data: fetchLikeArts, refetch: refetchLikeArts } =
    useQuery(FETCH_LIKE_ART)
  const [fetchArts] = useLazyQuery(FETCH_ARTS)
  const [addLikeArt] = useMutation(ADD_LIKE_ART)
  const [likeData, setLikeData] = useState([])
  const { data: userData } = useQuery(FETCH_USER)
  const [artsData, setArtsData] = useState([])
  const router = useRouter()

  useEffect(() => {
    if (
      userData?.fetchUser?.is_artist &&
      userData?.fetchUser?.is_artist !== undefined
    ) {
      checkUser()
    }
  }, [userData])

  console.log('userData:', userData)

  useEffect(() => {
    getArtsData()
  }, [artCategory])

  const getArtsData = async () => {
    try {
      const fetchArtsData = await fetchArts({
        variables: { tags: artCategory }
      })
      const tempArtsData = []
      console.log(fetchArtsData)
      const date = new Date()
      const yyyy = date.getFullYear()
      const mm = date.getMonth() + 1
      const dd = date.getDay()
      const tt = date.getHours()
      const mn = date.getMinutes()
      const nowDate = `${yyyy}-${mm}-${dd}T${tt}:${mn}:00:000Z`

      for (let i = 0; i < fetchArtsData.data.fetchArts.length; i++) {
        if (
          fetchArtsData.data.fetchArts[i].deadline < nowDate &&
          !fetchArtsData.data.fetchArts[i].is_soldout
        ) {
          tempArtsData.push(fetchArtsData.data.fetchArts[i])
        }
      }

      const stringifyTempArtsData = []
      const parseTempArtsData = []

      for (let i = 0; i < tempArtsData.length; i++) {
        stringifyTempArtsData.push(JSON.stringify(tempArtsData[i]))
      }

      const tempSet = new Set(stringifyTempArtsData)

      const setTempArtsData = tempSet.values()

      for (let i = 0; i < tempSet.size; i++) {
        parseTempArtsData.push(JSON.parse(setTempArtsData.next().value))
      }

      setArtsData(parseTempArtsData)
    } catch (e) {
      console.log('error:', e.message)
    }
  }

  const checkUser = async () => {
    try {
      await refetchLikeArts()
    } catch (e) {
      console.log(e.message)
    }
  }

  console.log(fetchLikeArts)

  const onClickArtCategory = (event) => {
    setArtCategory([event.target.id])
    setPage(0)
  }

  const onClickMoreButton = () => {
    setPage((prev) => prev + 9)
  }

  const onChangeSelect1 = (event) => {
    setPage(0)
    if (event.target.value) {
      setArtCategory([artCategory[0], event.target.value])
    } else {
      setArtCategory([artCategory[0]])
    }
  }

  const onChangeSelect2 = (event) => {
    setPage(0)
    if (event.target.value) {
      setArtCategory([artCategory[0], artCategory[1], event.target.value])
    } else {
      setArtCategory([artCategory[0], artCategory[1]])
    }
  }

  const onChangeSelect3 = (event) => {
    setPage(0)
    if (event.target.value) {
      setArtCategory([
        artCategory[0],
        artCategory[1],
        artCategory[2],
        event.target.value
      ])
    } else {
      setArtCategory([artCategory[0], artCategory[1], artCategory[2]])
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
    // console.log(event.currentTarget.id)
  }

  const onClickArtWorkCard = (event) => {
    router.push(`/art/${event.currentTarget.id}`)
  }

  return (
    <>
      <ArtListPresenter
        artCategory={artCategory}
        onClickArtCategory={onClickArtCategory}
        data={artsData.slice(0, page + 9)}
        page={page}
        is_artist={userData?.fetchUser.is_artist}
        likeData={likeData}
        onClickMoreButton={onClickMoreButton}
        onChangeSelect1={onChangeSelect1}
        onChangeSelect2={onChangeSelect2}
        onChangeSelect3={onChangeSelect3}
        onClickLike={onClickLike}
        onClickArtWorkCard={onClickArtWorkCard}
      />
    </>
  )
}
