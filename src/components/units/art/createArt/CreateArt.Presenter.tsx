import { today } from '../../../../commons/libraries/today'

export default function CreateArtPresenter(props) {
  return (
    <>
      <div>
        작품명: <input type="text" onChange={props.onChangeTitle} />
      </div>
      <br />
      <div>
        작품 설명: <input type="text" onChange={props.onChangeDescription} />
      </div>
      <br />
      <div>
        경매 시작 금액:{' '}
        <input
          type="number"
          defaultValue={props.start_price}
          step={1000}
          onChange={props.onChangeStart_price}
        />
        원
      </div>
      <br />
      <div>
        즉시구매가:{' '}
        <input
          type="number"
          defaultValue={props.instant_bid}
          step={1000}
          onChange={props.onChangeInstant_bid}
        />
        원
      </div>
      <br />
      <div>
        경매마감일:{' '}
        <input type="date" min={today()} onChange={props.onChangeDeadline} />
      </div>
      <br />
      <div>
        <button onClick={props.onClickImage}>이미지 등록</button>
        <input
          style={{ display: 'none' }}
          type="file"
          ref={props.fileRef}
          onChange={props.onChangeFile}
        />
      </div>
      <br />

      {props.image_urls[0] && (
        <div
          style={{
            width: '300px',
            height: '300px',
            backgroundImage: `url(https://storage.googleapis.com${props.image_urls[0]})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}
        ></div>
      )}
      <select onChange={props.onChangeTag0}>
        <option value="">작품</option>
        <option value="회화">회화</option>
        <option value="조소">조소</option>
        <option value="기타">기타</option>
      </select>
      {props.tags[0] === '회화' && (
        <>
          <select onChange={props.onChangeTag1}>
            <option value="">테마</option>
            <option value="인물">인물</option>
            <option value="풍경">풍경</option>
            <option value="정물">정물</option>
            <option value="동물">동물</option>
            <option value="상상">상상</option>
            <option value="추상">추상</option>
          </select>
          {props.tags[1] && (
            <>
              <select onChange={props.onChangeTag2}>
                <option value="">사이즈</option>
                <option value="소">소</option>
                <option value="중">중</option>
                <option value="대">대</option>
              </select>
              {props.tags[2] && (
                <select onChange={props.onChangeTag3}>
                  <option value="">설치형태</option>
                  <option value="정방향">정방향</option>
                  <option value="가로형">가로형</option>
                  <option value="세로형">세로형</option>
                </select>
              )}
            </>
          )}
        </>
      )}

      {props.tags[0] === '조소' && (
        <>
          <select onChange={props.onChangeTag1}>
            <option value="">종류</option>
            <option value="조각">조각</option>
            <option value="소조">소조</option>
          </select>
          {props.tags[1] === '조각' && (
            <select onChange={props.onChangeTag2}>
              <option value="">조각 종류</option>
              <option value="목조">목조</option>
              <option value="석조">석조</option>
              <option value="금속조">금속조</option>
            </select>
          )}
          {props.tags[1] === '소조' && (
            <select onChange={props.onChangeTag2}>
              <option value="">소조 종류</option>
              <option value="찰흙 소조">찰흙 소조</option>
              <option value="시멘트">시멘트</option>
              <option value="블론즈">블론즈</option>
            </select>
          )}
        </>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={props.onClickSubmit}>등록하기</button>
    </>
  )
}
