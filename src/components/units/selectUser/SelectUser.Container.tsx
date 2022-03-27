import { useRouter } from 'next/router'
import SelectUserPresenter from './SelectUser.Presenter'

export default function SelectUserContainer() {
  const router = useRouter()
  const onClickCreateArtist = () => {
    router.push('/createArtist')
  }
  const onClickCreateNoArtist = () => {
    router.push('/createUser')
  }
  return (
    <SelectUserPresenter
      onClickCreateArtist={onClickCreateArtist}
      onClickCreateNoArtist={onClickCreateNoArtist}
    />
  )
}
