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
  const [fetchLikeArt] = useLazyQuery(FETCH_LIKE_ART)
  const { data } = useQuery(FETCH_ARTS, {
    variables: { tags: artCategory }
  })
  const [addLikeArt] = useMutation(ADD_LIKE_ART)

  const [likeData, setLikeData] = useState([])
  console.log(data)
  console.log(likeData)
  const { data: userData } = useQuery(FETCH_USER)
  const router = useRouter()

  useEffect(() => {
    if (
      userData?.fetchUser?.is_artist &&
      userData?.fetchUser?.is_artist !== undefined
    ) {
      checkUser()
    }
  }, [userData])

  const checkUser = async () => {
    try {
      const likeArt = await fetchLikeArt()
      setLikeData([likeArt])
    } catch (e) {
      console.log(e)
    }
  }

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
      const likeArt = await fetchLikeArt()
      const tempLikeArt = []
      for (let i = 0; i < likeArt.data.fetchLikeArt.length; i++) {
        tempLikeArt.push(likeArt.data.fetchLikeArt[i].id)
      }
      setLikeData(tempLikeArt)
    } catch (e) {
      alert(e.message)
    }
  }

  const onClickArtWorkCard = (event) => {
    router.push(`/art/${event.currentTarget.id}`)
  }

  return (
    <>
      {/* <ArtListPresenter
        artCategory={artCategory}
        onClickArtCategory={onClickArtCategory}
        // data={data?.fetchArts.slice(0, page + 9)}
        page={page}
        is_artist={userData?.fetchUser.is_artist}
        onClickMoreButton={onClickMoreButton}
        onChangeSelect1={onChangeSelect1}
        onChangeSelect2={onChangeSelect2}
        onChangeSelect3={onChangeSelect3}
        onClickLike={onClickLike}
        onClickArtWorkCard={onClickArtWorkCard}
      /> */}
    </>
  )
}
