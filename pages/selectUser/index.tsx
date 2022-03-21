import { useRouter } from 'next/router'

export default function SelectUserPage() {
  const router = useRouter()
  const onClickCreateArtist = () => {
    router.push('/createArtist')
  }
  const onClickCreateNoArtist = () => {
    router.push('/createUser')
  }
  return (
    <>
      <div onClick={onClickCreateArtist}>미대생으로 회원가입하기</div>
      <div onClick={onClickCreateNoArtist}>일반 회원으로 회원가입하기</div>
    </>
  )
}
