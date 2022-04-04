import { useEffect, useState } from 'react'
import * as S from './ReadImage.Styles'

export default function ReviewImageContainer(props) {
  const head = `https://storage.googleapis.com`
  const [sortImages, setSortImages] = useState([])
  const [clickImage, setClickImage] = useState('')
  const dots = sortImages.map((el, index) => (
    <S.Dots key={index} id={el} src={`${head}${el}`} />
  ))

  const sortImage = () => {
    if (props.fetchBoardImages) {
      const tempImages = props.fetchBoardImages?.fetchBoardImgaes
      const Images = tempImages.map((el) => {
        return el.url
      })
      setSortImages(Images)
    }
  }
  useEffect(() => {
    sortImage()
  }, [props.fetchBoardImages])
  const onClickImages = (event) => {
    setClickImage(event.target.id)
  }

  return (
    <S.SideWrapper>
      <S.BigPhotoWrapper>
        <S.BigPhoto
          src={clickImage ? `${head}${clickImage}` : `${head}${sortImages[0]}`}
        />
      </S.BigPhotoWrapper>
      <S.DotsWrapper onClick={onClickImages}>{dots}</S.DotsWrapper>
    </S.SideWrapper>
  )
}
