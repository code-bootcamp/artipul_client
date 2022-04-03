import * as V from './ArtistIntroduce.Styles'
import dynamic from 'next/dynamic'

const ViewerC = dynamic(() => import('./Viewr'), { ssr: false })

export default function ArtistIntroducePresenter(props) {
  console.log(props.profileData)
  const head = `https://storage.googleapis.com`

  return (
    <>
      <V.Header>
        {props.data?.fetchArtistWorks[0].user?.name} 님의 이야기
      </V.Header>
      <V.ViewerWrapper>
        <ViewerC data={props.profileData} />
      </V.ViewerWrapper>
      <V.Header2>
        {props.data?.fetchArtistWorks[0].user?.name} 님의 다른 작품들
      </V.Header2>
      <V.MapWrapper>
        {props.data?.fetchArtistWorks.map((el) => (
          <V.MapDiv key={el.id}>
            <V.MapImageDiv>
              <V.MapElImage src={`${head}${el.thumbnail}`} />
            </V.MapImageDiv>
            <V.MapElTitle>{el.title}</V.MapElTitle>
          </V.MapDiv>
        ))}
      </V.MapWrapper>
    </>
  )
}
