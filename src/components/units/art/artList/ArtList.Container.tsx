import { useEffect, useState } from 'react'
import ArtListPresenter from './ArtList.Presenter'
import { FETCH_ARTS } from './ArtList.Queries'
import { useLazyQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { warningModal } from '../../../commons/Modal'

export default function ArtListContainer() {
  const [artCategory, setArtCategory] = useState(['회화'])
  const [page, setPage] = useState(0)
  const [fetchArts] = useLazyQuery(FETCH_ARTS)
  const [artsData, setArtsData] = useState([])
  const router = useRouter()

  useEffect(() => {
    getArtsData()
  }, [artCategory])

  const getArtsData = async () => {
    try {
      const fetchArtsData = await fetchArts({
        variables: { tags: artCategory }
      })

      const tempArtsData = []

      const date = new Date()
      const yyyy = date.getFullYear()
      const mm = (date.getMonth() + 1).toString().padStart(2, '0')
      const dd = date.getDate().toString().padStart(2, '0')
      const tt = date.getHours().toString().padStart(2, '0')
      const mn = date.getMinutes().toString().padStart(2, '0')
      const nowDate = `${yyyy}-${mm}-${dd} ${tt}:${mn}:00:000Z`
      for (let i = 0; i < fetchArtsData.data.fetchArts.length; i++) {
        if (
          fetchArtsData.data.fetchArts[i].deadline > nowDate &&
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
      setArtsData([])
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

  const onClickArtWorkCard = (event) => {
    router.push(`/art/${event.currentTarget.id}`)
  }

  return (
    <>
      <ArtListPresenter
        artCategory={artCategory}
        onClickArtCategory={onClickArtCategory}
        data={artsData.slice(0, page + 9)}
        artsData={artsData}
        page={page}
        onClickMoreButton={onClickMoreButton}
        onChangeSelect1={onChangeSelect1}
        onChangeSelect2={onChangeSelect2}
        onChangeSelect3={onChangeSelect3}
        onClickArtWorkCard={onClickArtWorkCard}
      />
    </>
  )
}
