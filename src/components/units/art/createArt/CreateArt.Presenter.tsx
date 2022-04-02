import { today } from '../../../../commons/libraries/today'
import * as S from './CreateArt.Styles'

export default function CreateArtPresenter(props) {
  return (
    <>
      <S.CreateArtWrapper>
        <S.CreateArtMainTitle>작품등록</S.CreateArtMainTitle>
        <S.CreateArtSubTitle>01. 작품정보</S.CreateArtSubTitle>
        <S.CreateArtTitleBox>
          <S.CreateArtTitle>작품 제목</S.CreateArtTitle>
          <S.CreateArtTitleInput type="text" onChange={props.onChangeTitle} />
        </S.CreateArtTitleBox>
        <S.CreateArtImageBox>
          <S.CreateArtTitle>작품 사진</S.CreateArtTitle>
          {props.image_urls[0] ? (
            <S.CreateArtImageInputImageBox>
              <S.CreateArtImageInputImage image_url={props.image_urls[0]} />
            </S.CreateArtImageInputImageBox>
          ) : (
            <S.CreateArtImageInputButtonBox>
              <S.CreateArtImageInputButton onClick={props.onClickImage}>
                사진 업로드하기
              </S.CreateArtImageInputButton>
              <input
                style={{ display: 'none' }}
                type="file"
                ref={props.fileRef}
                onChange={props.onChangeFile}
              />
            </S.CreateArtImageInputButtonBox>
          )}
        </S.CreateArtImageBox>
        <S.CreateArtCategoryBox>
          <S.CreateArtTitle>작품 카테고리</S.CreateArtTitle>
          <S.CreateArtCategorySelectBox>
            <S.CreateArtCategorySelect onChange={props.onChangeTag0}>
              <option value="">작품</option>
              <option value="회화">회화</option>
              <option value="조소">조소</option>
              <option value="기타">기타</option>
            </S.CreateArtCategorySelect>
            {props.tag1 === '회화' && (
              <>
                <S.CreateArtCategorySelect onChange={props.onChangeTag1}>
                  <option value="">테마</option>
                  <option value="인물">인물</option>
                  <option value="풍경">풍경</option>
                  <option value="정물">정물</option>
                  <option value="동물">동물</option>
                  <option value="상상">상상</option>
                  <option value="추상">추상</option>
                </S.CreateArtCategorySelect>
                {props.tag2 && (
                  <>
                    <S.CreateArtCategorySelect onChange={props.onChangeTag2}>
                      <option value="">사이즈</option>
                      <option value="소">소</option>
                      <option value="중">중</option>
                      <option value="대">대</option>
                    </S.CreateArtCategorySelect>
                    {props.tag3 && (
                      <S.CreateArtCategorySelect onChange={props.onChangeTag3}>
                        <option value="">설치형태</option>
                        <option value="정방향">정방향</option>
                        <option value="가로형">가로형</option>
                        <option value="세로형">세로형</option>
                      </S.CreateArtCategorySelect>
                    )}
                  </>
                )}
              </>
            )}

            {props.tag1 === '조소' && (
              <>
                <S.CreateArtCategorySelect onChange={props.onChangeTag1}>
                  <option value="">종류</option>
                  <option value="조각">조각</option>
                  <option value="소조">소조</option>
                </S.CreateArtCategorySelect>
                {props.tag2 === '조각' && (
                  <S.CreateArtCategorySelect onChange={props.onChangeTag2}>
                    <option value="">조각 종류</option>
                    <option value="목조">목조</option>
                    <option value="석조">석조</option>
                    <option value="금속조">금속조</option>
                  </S.CreateArtCategorySelect>
                )}
                {props.tag2 === '소조' && (
                  <S.CreateArtCategorySelect onChange={props.onChangeTag2}>
                    <option value="">소조 종류</option>
                    <option value="찰흙 소조">찰흙 소조</option>
                    <option value="시멘트">시멘트</option>
                    <option value="블론즈">블론즈</option>
                  </S.CreateArtCategorySelect>
                )}
              </>
            )}
          </S.CreateArtCategorySelectBox>
        </S.CreateArtCategoryBox>
        <S.CreateArtDescriptionBox>
          <S.CreateArtTitle>작품 소개</S.CreateArtTitle>
          <S.CreateArtDescriptionInput onChange={props.onChangeDescription} />
        </S.CreateArtDescriptionBox>

        <S.CreateArtSubTitle>02. 경매 정보</S.CreateArtSubTitle>
        <S.CreateArtDeadlineBox>
          <S.CreateArtTitle>경매 마감일</S.CreateArtTitle>
          <S.CreateArtDeadlineInputBox>
            <S.CreateArtDeadline
              type="date"
              min={today()}
              onChange={props.onChangeDeadline}
            />
            <S.CreateArtDeadline type="time" onChange={props.onChangeTime} />
          </S.CreateArtDeadlineInputBox>
        </S.CreateArtDeadlineBox>
        <S.CreateArtPriceBox>
          <S.CreateArtTitle>경매시작가</S.CreateArtTitle>
          <S.CreateArtPriceInput
            type="number"
            defaultValue={props.start_price}
            step={1000}
            onChange={props.onChangeStart_price}
          />
          원
        </S.CreateArtPriceBox>
        <S.CreateArtPriceBox>
          <S.CreateArtTitle>즉시구매가</S.CreateArtTitle>
          <S.CreateArtPriceInput
            type="number"
            defaultValue={props.instant_bid}
            step={1000}
            onChange={props.onChangeInstant_bid}
          />
          원
        </S.CreateArtPriceBox>
        <S.CreateArtButtonBox>
          <S.CreateArtSubmitButton onClick={props.onClickSubmit}>
            작품 등록하기
          </S.CreateArtSubmitButton>
          <S.CreateArtCancleButton onClick={props.onClickCancle}>
            등록 취소하기
          </S.CreateArtCancleButton>
        </S.CreateArtButtonBox>
      </S.CreateArtWrapper>
    </>
  )
}
