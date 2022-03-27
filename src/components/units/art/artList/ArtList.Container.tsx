import { useState } from 'react'
import ArtListPresenter from './ArtList.Presenter'
import {
  dummyData_Pictures,
  dummyData_Piece,
  dummyData_Etc
} from './ArtWorkTestData'

export default function ArtListContainer() {
  const [artCategory, setArtCategory] = useState(['회화'])
  const [data, setData] = useState(dummyData_Pictures)

  function onClickArtCategory(event) {
    setArtCategory([event.target.id])
    if (event.target.id === '회화') {
      setData(dummyData_Pictures)
    } else if (event.target.id === '조소') {
      setData(dummyData_Piece)
    } else if (event.target.id === '기타') {
      setData(dummyData_Etc)
    }
  }

  function onClickMoreButton() {
    setData([...data, ...data])
  }

  function onChangeSelect1(event) {
    if (event.target.value) {
      setArtCategory([artCategory[0], event.target.value])
    } else {
      setArtCategory([artCategory[0]])
    }
  }

  function onChangeSelect2(event) {
    if (event.target.value) {
      setArtCategory([artCategory[0], artCategory[1], event.target.value])
    } else {
      setArtCategory([artCategory[0], artCategory[1]])
    }
  }

  function onChangeSelect3(event) {
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

  console.log(artCategory)

  return (
    <>
      <ArtListPresenter
        artCategory={artCategory}
        setArtCategory={setArtCategory}
        onClickArtCategory={onClickArtCategory}
        data={data}
        onClickMoreButton={onClickMoreButton}
        onChangeSelect1={onChangeSelect1}
        onChangeSelect2={onChangeSelect2}
        onChangeSelect3={onChangeSelect3}
      />
    </>
  )
}
