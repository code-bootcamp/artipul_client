import { useRouter } from 'next/router'

export default function ArtDetailPage() {
  const router = useRouter()
  return <>{router.query.id}</>
}
