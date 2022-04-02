export default function ReviewListPresenter(props) {
  console.log(props.data)
  return (
    <>
      <div>리뷰 리스트</div>
      {props.data?.fetchBoards.map((el) => (
        <div key={el.id} onClick={props.onClickDetail}>
          <div>이미지넣고</div>
          <div>제목넣고</div>
          <div>날짜정도?</div>
        </div>
      ))}
    </>
  )
}
