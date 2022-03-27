import { useState } from 'react'
import ArtListPresenter from './ArtList.Presenter'
import {
  dummyData_Pictures,
  dummyData_Piece,
  dummyData_Etc
} from './ArtWorkTestData'

export default function ArtListContainer() {
  const [artCategory, setArtCategory] = useState('회화')
  const [data, setData] = useState(dummyData_Pictures)

  function onClickArtCategory(event) {
    setArtCategory(event.target.id)
    if (event.target.id === '회화') {
      setData(dummyData_Pictures)
    } else if (event.target.id === '조각') {
      setData(dummyData_Piece)
    } else if (event.target.id === '기타') {
      setData(dummyData_Etc)
    }
  }

  function onClickMoreButton() {
    setData([...data, ...data])
  }

  return (
    <>
      <ArtListPresenter
        artCategory={artCategory}
        setArtCategory={setArtCategory}
        onClickArtCategory={onClickArtCategory}
        data={data}
        onClickMoreButton={onClickMoreButton}
      />
    </>
  )
}
