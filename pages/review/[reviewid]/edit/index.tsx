import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  FETCH_BOARD,
  FETCH_BOARD_IMAGES
} from '../../../../src/components/units/review/detail/ReviewDetail.Queries'
import ReviewContainer from '../../../../src/components/units/review/write/ReviewWrite.container'

export default function ReviewEditPage() {
  const router = useRouter()
  const [sortImages, setSortImages] = useState([])
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.reviewid }
  })
  const { data: imagesData } = useQuery(FETCH_BOARD_IMAGES, {
    variables: { boardId: router.query.reviewid }
  })

  const sortImage = () => {
    if (imagesData) {
      const tempImages = imagesData?.fetchBoardImgaes
      const Images = tempImages.map((el) => {
        return el.url
      })
      setSortImages(Images)
    }
  }
  useEffect(() => {
    sortImage()
  }, [imagesData])

  return (
    <ReviewContainer
      isEdit={true}
      data={data}
      sortImages={sortImages}
      imagesData={imagesData}
    />
  )
}
