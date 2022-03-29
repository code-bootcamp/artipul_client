import * as B from './MyBoards.Styles'
export default function MyBoardsPresenter() {
  return (
    <>
      <B.Wrapper>
        <B.Header>작성한 리뷰</B.Header>
        <B.MapWrapper>
          {new Array(8).fill(1).map((_, index) => (
            <B.MapDiv key={index}>
              <div>
                <B.MapElImage src="/test1.jpg" />
              </div>
              <B.MapElTitle>제목 넣고</B.MapElTitle>
              <B.MapElCreatedAt>작성날자 넣고</B.MapElCreatedAt>
            </B.MapDiv>
          ))}
        </B.MapWrapper>
      </B.Wrapper>
    </>
  )
}
