import UploadImageContainer from '../uploadImage/UploadImage.Container'
export default function ReviewPreview(props) {
  return (
    <>
      {props.isEdit ? <div>리뷰 수정하기</div> : <div>리뷰 등록하기</div>}

      <div>
        <div>리뷰할 작품 선택하기</div>
        <div>
          {/* {props.completedArtsData?.fetchTransactionCompleArts?.map(
            (el, index) => (
              <div key={el.id}>
                <div>
                  <img src={el.thumbnail} />
                </div>
                <div>{el.title}</div>
                <div>{index + 1}</div>
              </div>
            )
          )} */}
          {new Array(4).fill(1).map((el, index) => (
            <div key={el.id} style={{ border: '1px solid black' }}>
              <div>
                <img src={el.thumbnail} />
              </div>
              <div>{el.title}</div>
              <div>{index + 1}</div>
            </div>
          ))}
        </div>
        <div>제목</div>
        <input
          type="text"
          defaultValue={
            props.data?.fetchBoard.title ? props.data?.fetchBoard.title : ''
          }
          onChange={props.onChangeTitle}
        />
        <div>리뷰 사진 고르기</div>
        {props.images.map((el, index) => (
          <div key={index}>
            <UploadImageContainer
              index={index}
              el={el}
              uploadBoardImage={props.uploadBoardImage}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          </div>
        ))}
        <div>내용</div>
        <input
          type="text"
          defaultValue={
            props.data?.fetchBoard.content ? props.data?.fetchBoard.content : ''
          }
          onChange={props.onChangeContent}
        />
      </div>
      {props.isEdit ? (
        <div>
          <button onClick={props.onClickUpdateBoard}>리뷰 수정하기</button>
        </div>
      ) : (
        <div>
          <button onClick={props.onClickCreateBoard}>리뷰 등록하기</button>
        </div>
      )}
    </>
  )
}
