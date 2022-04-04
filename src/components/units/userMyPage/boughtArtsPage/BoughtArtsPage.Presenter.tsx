import { Pagination } from 'antd'
import * as B from './BoughtArtsPage.Styles'

export default function BoughtArtsPagePresenter(props) {
  console.log(props.data)
  const head = `https://storage.googleapis.com`
  return (
    <>
      <B.Wrapper>
        <B.Header>구매한 작품들</B.Header>
        <B.TableHead>
          <B.TableHeadMenu>작품이미지</B.TableHeadMenu>
          <B.TableHeadMenu>카테고리</B.TableHeadMenu>
          <B.TableHeadMenu>제목</B.TableHeadMenu>
          <B.TableHeadMenu>작가명</B.TableHeadMenu>
          <B.TableHeadMenu>낙찰가</B.TableHeadMenu>
          <B.TableHeadMenu>구매날짜</B.TableHeadMenu>
        </B.TableHead>

        {props.data?.fetchTransactionCompletedArts.map((el) => (
          <B.TableRow key={el.id}>
            <B.TableRowMenu>
              <B.TableRowImg src={`${head}${el.thumbnail}`} />
            </B.TableRowMenu>
            <B.TableRowMenu>{el.tag1}</B.TableRowMenu>
            <B.TableRowMenu>{el.title}</B.TableRowMenu>
            <B.TableRowMenu>{el.payment.user.name}</B.TableRowMenu>
            <B.TableRowMenu>{el.price}</B.TableRowMenu>
            <B.TableRowMenu>{el.deadline.slice(0, 10)}</B.TableRowMenu>
          </B.TableRow>
        ))}
        <B.PagiDiv>
          <Pagination
            current={1}
            total={props.fetchSoldoutArtsCount?.fetchSoldoutArtsCount}
            onChange={props.onChange}
          />
        </B.PagiDiv>
      </B.Wrapper>
    </>
  )
}
