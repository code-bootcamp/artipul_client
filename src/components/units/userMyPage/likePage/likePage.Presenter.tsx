import * as L from './likePage.Styles'
export default function LikePagePresenter() {
  return (
    <>
      <L.Wrapper>
        <L.Header>내가 찜한 작품들</L.Header>
        <L.MapWrapper>
          {new Array(8).fill(1).map((_, index) => (
            <L.MapDiv key={index}>
              <L.MapElImageDiv>
                <L.MapElImage src="/test2.jpg" />
              </L.MapElImageDiv>
              <L.MapDeadLine>경매 마감일 넣고</L.MapDeadLine>
              <L.MapElCategory>카테고리 넣고</L.MapElCategory>
              <L.MapElTitle>제목 넣고</L.MapElTitle>
              <L.MapElArtist>작가 넣고</L.MapElArtist>
            </L.MapDiv>
          ))}
        </L.MapWrapper>
      </L.Wrapper>
    </>
  )
}
