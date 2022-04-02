export default function ReviewDetailPresenter(props) {
  const head = `https://storage.googleapis.com`
  console.log(props.data)
  return (
    <>
      <div>상세페이지</div>
      <div>작성자의 닉네임: {props.data?.fetchBoard.user.nickname}</div>
      <div>제목: {props.data?.fetchBoard.title}</div>
      <div>내용: {props.data?.fetchBoard.content}</div>
      <div style={{ width: '200px', height: '200px' }}>
        <img
          style={{ width: '100%', height: '100%' }}
          src={`${head}${props.data?.fetchBoard.thumbnail}`}
        />
      </div>
      <div>
        <button onClick={props.onClickEdit}>수정하러가기</button>
        <button onClick={props.onClickDelete}>삭제하기</button>
      </div>
    </>
  )
}
