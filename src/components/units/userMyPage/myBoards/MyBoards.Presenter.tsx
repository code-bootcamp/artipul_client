import { Pagination } from 'antd'
import * as B from './MyBoards.Styles'
export default function MyBoardsPresenter(props) {
  const head = `https://storage.googleapis.com`
  return (
    <>
      <B.Wrapper>
        <B.Header>작성한 리뷰</B.Header>
        <B.MapWrapper>
          {props.data?.fetchBoardsOfMine.map((el) => (
            <B.MapDiv key={el.id} onClick={props.onClickBoardDetail(el)}>
              <div>
                <B.MapElImage src={`${head}${el.thumbnail}`} />
              </div>
              <B.MapElTitle>{el.title}</B.MapElTitle>
              <B.MapElCreatedAt>{el.createdAt.slice(0, 10)}</B.MapElCreatedAt>
            </B.MapDiv>
          ))}
        </B.MapWrapper>
        <B.PagiDiv>
          <Pagination
            current={props.page}
            total={props.fetchBoardsOfMineCount?.fetchBoardsOfMineCount}
            onChange={props.onChange}
          />
        </B.PagiDiv>
      </B.Wrapper>
    </>
  )
}
