import { useState, useRef, ChangeEvent } from 'react'
import CreateArtPresenter from './CreateArt.Presenter'
import { useMutation } from '@apollo/client'
import { CREATE_ART, UPLOAD_ART_IMAGE } from './CreateArt.Queries'
import { checkFileValidation } from '../../../../commons/libraries/checkFileValidation'
import { useRouter } from 'next/router'

export default function CreateArtContainer() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [start_price, setStart_price] = useState(10000)
  const [instant_bid, setInstant_bid] = useState(start_price + 10000)
  const [deadline, setDeadline] = useState('')
  const [image_urls, setImage_urls] = useState([])
  const [is_soldout, _] = useState(false)
  const [tags, setTags] = useState([])

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
      alert(error.message)
    }
  }

  const onChangeTag0 = (event) => {
    if (event.target.value !== '') {
      setTags([event.target.value])
    } else {
      setTags([])
    }
  }
  const onChangeTag1 = (event) => {
    if (event.target.value !== '') {
      setTags([tags[0], event.target.value])
    } else {
      setTags([tags[0]])
    }
  }
  const onChangeTag2 = (event) => {
    if (event.target.value !== '') {
      setTags([tags[0], tags[1], event.target.value])
    } else {
      setTags([tags[0], tags[1]])
    }
  }
  const onChangeTag3 = (event) => {
    if (event.target.value !== '') {
      setTags([tags[0], tags[1], tags[2], event.target.value])
    } else {
      setTags([tags[0], tags[1], tags[2]])
    }
  }

  const onClickSubmit = async () => {
    if (
      (title &&
        description &&
        start_price <= instant_bid - 10000 &&
        deadline &&
        image_urls[0] &&
        tags[0] === '회화' &&
        tags[1] &&
        tags[2] &&
        tags[3]) ||
      (title &&
        description &&
        start_price <= instant_bid - 10000 &&
        deadline &&
        image_urls[0] &&
        tags[0] === '조소' &&
        tags[1] &&
        tags[2]) ||
      (title &&
        description &&
        start_price <= instant_bid - 10000 &&
        deadline &&
        image_urls[0] &&
        tags[0] === '기타')
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
              image_urls,
              is_soldout,
              tags
            }
          }
        })
        alert('등록이 완료되었습니다.')
        router.push(`/art/${result.data.createArt.id}`)
      } catch (e) {
        alert(e.message)
      }
    } else {
      alert('잘못입력했습니다.')
    }
  }

  const onClickCancle = () => {
    router.push('/mypage')
  }

  console.log(description)

  return (
    <>
      <CreateArtPresenter
        onChangeTitle={onChangeTitle}
        onChangeDescription={onChangeDescription}
        onChangeStart_price={onChangeStart_price}
        onChangeInstant_bid={onChangeInstant_bid}
        onChangeDeadline={onChangeDeadline}
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
        tags={tags}
      />
    </>
  )
}
