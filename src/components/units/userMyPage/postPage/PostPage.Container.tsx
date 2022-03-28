import { useMutation, useQuery } from '@apollo/client'
import { ChangeEvent, useEffect, useState } from 'react'
import { CREATE_PROFILE, FETCH_PROFILE } from '../UserMyPage.Queries'
import PostPagePresenter from './PostPage.Presenter'

export default function PostPageContainer() {
  const { data, refetch } = useQuery(FETCH_PROFILE)
  const [createProfile] = useMutation(CREATE_PROFILE)
  const [zipcode, setZipcode] = useState('')
  const [address, setAddress] = useState('')
  const [addressDetail, setAddressDetail] = useState('')
  const [view, setView] = useState(false)

  const onClickDaumPostCode = () => {
    setView((prev) => !prev)
  }

  const onCompleteDaumPostcode = (ad: any) => {
    setAddress(ad.address)
    setZipcode(ad.zonecode)
    onClickDaumPostCode()
  }

  const onChangeAddressDetail = (e: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(e.target.value)
  }

  const onClickSubmitProfile1 = async () => {
    try {
      await createProfile({
        variables: {
          createProfileInput: {
            address: `${zipcode}#$%${address}#$%${addressDetail}`
          }
        }
      })
      refetch()
    } catch (e) {
      alert(e.message)
    }
  }
  useEffect(() => {
    if (data?.fetchProfile.address?.split('#$%')[0]) {
      setZipcode(data?.fetchProfile.address?.split('#$%')[0])
    }
    if (data?.fetchProfile.address?.split('#$%')[1]) {
      setAddress(data?.fetchProfile.address?.split('#$%')[1])
    }
    if (data?.fetchProfile.address?.split('#$%')[2]) {
      setAddressDetail(data?.fetchProfile.address?.split('#$%')[2])
    }
  }, [data])
  return (
    <PostPagePresenter
      data={data}
      view={view}
      onClickDaumPostCode={onClickDaumPostCode}
      onCompleteDaumPostcode={onCompleteDaumPostcode}
      zipcode={zipcode}
      address={address}
      addressDetail={addressDetail}
      onChangeAddressDetail={onChangeAddressDetail}
      onClickSubmitProfile1={onClickSubmitProfile1}
    />
  )
}
