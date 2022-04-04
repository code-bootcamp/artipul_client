import { useState, useRef, ChangeEvent } from 'react'
import CreateArtPresenter from './CreateArt.Presenter'
import { useMutation } from '@apollo/client'
import { CREATE_ART, UPLOAD_ART_IMAGE } from './CreateArt.Queries'
import { checkFileValidation } from '../../../../commons/libraries/checkFileValidation'
import { useRouter } from 'next/router'
import { successModal, warningModal } from '../../../commons/Modal'

export default function CreateArtContainer() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [start_price, setStart_price] = useState(10000)
  const [instant_bid, setInstant_bid] = useState(start_price + 10000)
  const [deadline, setDeadline] = useState('')
  const [deadlineDate, setDeadlineDate] = useState('')
  const [image_urls, setImage_urls] = useState([])
  const [is_soldout, _] = useState(false)
  const [tag1, setTag1] = useState('')
  const [tag2, setTag2] = useState('')
  const [tag3, setTag3] = useState('')
  const [tag4, setTag4] = useState('')

  const [createArt] = useMutation(CREATE_ART)
  const [uploadArtImage] = useMutation(UPLOAD_ART_IMAGE)

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const onChangeDescription = (event) => {
    setDescription(event.target.value)
  }
  const onChangeStart_price = (event) => {
    setStart_price(Number(event.target.value))
    if (instant_bid < Number(event.target.value)) {
      setInstant_bid(Number(event.target.value) + 10000)
    }
  }

  const onChangeInstant_bid = (event) => {
    setInstant_bid(Number(event.target.value))
    if (start_price > Number(event.target.value)) {
      setInstant_bid(Number(event.target.value) + 10000)
    }
  }

  const onChangeDeadline = (event) => {
    setDeadline(String(event.target.value))
    setDeadlineDate(String(event.target.value))
  }

  const onChangeTime = (event) => {
    setDeadline(deadlineDate + 'T' + event.target.value + ':00.000Z')
  }

  const fileRef = useRef<HTMLInputElement>(null)

  const onClickImage = () => {
    fileRef.current.click()
  }

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files[0]

    const isValid = checkFileValidation(files)

    if (!isValid) {
      return
    }
    try {
      const result = await uploadArtImage({
        variables: { files }
      })
      setImage_urls([result?.data?.uploadArtImage[0]])
    } catch (error) {
      warningModal(error.message)
    }
  }

  const onChangeTag0 = (event) => {
    if (event.target.value !== '') {
      if (tag1 !== event.target.value) {
        setTag2('')
        setTag3('')
        setTag4('')
      }
      setTag1(event.target.value)
    } else {
      setTag1('')
      setTag2('')
      setTag3('')
      setTag4('')
    }
  }

  const onChangeTag1 = (event) => {
    if (event.target.value !== '') {
      if (tag2 !== event.target.value) {
        setTag3('')
        setTag4('')
      }
      setTag2(event.target.value)
    } else {
      setTag2('')
      setTag3('')
      setTag4('')
    }
  }

  const onChangeTag2 = (event) => {
    if (event.target.value !== '') {
      if (tag3 !== event.target.value) {
        setTag4('')
      }
      setTag3(event.target.value)
    } else {
      setTag3('')
      setTag4('')
    }
  }

  const onChangeTag3 = (event) => {
    if (event.target.value !== '') {
      setTag4(event.target.value)
    } else {
      setTag4('')
    }
  }

  const onClickSubmit = async () => {
    if (
      (title &&
        deadline &&
        image_urls[0] &&
        tag1 === '회화' &&
        tag2 &&
        tag3 &&
        tag4) ||
      (title && deadline && image_urls[0] && tag1 === '조소' && tag2 && tag3) ||
      (title && deadline && image_urls[0] && tag1 === '기타')
    ) {
      try {
        const result = await createArt({
          variables: {
            createArtInput: {
              title,
              description,
              start_price,
              instant_bid,
              price: start_price,
              deadline,
              thumbnail: image_urls[0],
              is_soldout,
              tags: [tag1, tag2, tag3, tag4]
            }
          }
        })
        successModal('등록이 완료되었습니다.')
        router.push(`/art/${result.data.createArt.id}`)
      } catch (e) {
        warningModal(e.message)
      }
    } else {
      warningModal('잘못입력했습니다.')
    }
  }

  const onClickCancle = () => {
    router.push('/mypage')
  }

  return (
    <>
      <CreateArtPresenter
        onChangeTitle={onChangeTitle}
        onChangeDescription={onChangeDescription}
        onChangeStart_price={onChangeStart_price}
        onChangeInstant_bid={onChangeInstant_bid}
        onChangeDeadline={onChangeDeadline}
        onChangeTime={onChangeTime}
        onClickImage={onClickImage}
        onChangeFile={onChangeFile}
        onChangeTag0={onChangeTag0}
        onChangeTag1={onChangeTag1}
        onChangeTag2={onChangeTag2}
        onChangeTag3={onChangeTag3}
        onClickSubmit={onClickSubmit}
        onClickCancle={onClickCancle}
        start_price={start_price}
        instant_bid={instant_bid}
        fileRef={fileRef}
        image_urls={image_urls}
        tag1={tag1}
        tag2={tag2}
        tag3={tag3}
        tag4={tag4}
      />
    </>
  )
}

//http://localhost:3000/art/1b25c3b7-dccb-4725-ae9a-b6e92ef6dd54
