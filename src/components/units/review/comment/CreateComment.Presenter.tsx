export default function CreateCommentPresenter(props) {
  return (
    <>
      <input type="text" onChange={props.onChangeContent} />
      <button onClick={props.onClickCreateComment}>댓글 등록</button>
    </>
  )
}
