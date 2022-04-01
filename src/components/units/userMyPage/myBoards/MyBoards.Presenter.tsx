import { Pagination } from 'antd'
import * as B from './MyBoards.Styles'
export default function MyBoardsPresenter(props) {
  const head = `https://storage.googleapis.com`
  return (
    <>
      <B.Wrapper>
        <B.Header>작성한 리뷰</B.Header>
        <B.MapWrapper>
          {props.data?.fetchBoardsOfMine.map((el, index) => (
            <B.MapDiv key={index}>
              <div>
                <B.MapElImage src={`${head}${el.thumbnail}`} />
              </div>
              <B.MapElTitle>{el.title}</B.MapElTitle>
              <B.MapElCreatedAt>{el.createdAt}</B.MapElCreatedAt>
            </B.MapDiv>
          ))}
        </B.MapWrapper>
        <B.PagiDiv>
          <Pagination
            current={1}
            total={props.fetchBoardsOfMineCount?.fetchBoardsOfMineCount}
            onChange={props.onChange}
          />
        </B.PagiDiv>
      </B.Wrapper>
    </>
  )
}
