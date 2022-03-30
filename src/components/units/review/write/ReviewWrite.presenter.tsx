// import Select from 'react-select'
import { IReviewWriteUIProps } from './ReviewWrite.types'
import * as S from './ReviewWrite.styles'

export default function ReviewWriteUI(props: IReviewWriteUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.MainWrapper>
          <S.Subject>리뷰 {props.isEdit ? '수정하기' : '작성하기'}</S.Subject>
          <S.BodyWrapper>
            <S.LabelGuideWrapper>
              <S.Label>01. 작품 선택</S.Label>
              <S.Guide>리뷰를 작성하고 싶은 작품을 선택해주세요.</S.Guide>
            </S.LabelGuideWrapper>
            <S.Upload>
              <S.UploadBtn>작품 선택하기</S.UploadBtn>
            </S.Upload>
          </S.BodyWrapper>
          <S.BodyWrapper>
            <S.LabelGuideWrapper>
              <S.Label>02. 사진 업로드</S.Label>
              <S.Guide>리뷰를 작성하고 싶은 사진을 올려주세요.</S.Guide>
            </S.LabelGuideWrapper>
            <S.ImageWrapper>
              <S.Upload onClick={props.onClickImage}>
                <S.UploadBtn>사진 업로드하기</S.UploadBtn>
              </S.Upload>
              <input
                style={{ display: 'none' }}
                type="file"
                ref={props.fileRef}
                onChange={props.onChangeFile}
                multiple
              />
              <S.Upload>
                <S.UploadBtn>사진 업로드하기</S.UploadBtn>
              </S.Upload>
              <S.Upload>
                <S.UploadBtn>사진 업로드하기</S.UploadBtn>
              </S.Upload>
            </S.ImageWrapper>
          </S.BodyWrapper>

          <S.BodyWrapper>
            <S.Label>03. 리뷰 작성</S.Label>
            <S.BodyBottomWrapper>
              <S.Guide>· 제목을 적어주세요.</S.Guide>
              <S.Warning>
                <span>{props.titleWarning}</span>
              </S.Warning>
              <S.Title onChange={props.onChangeTitle} />
            </S.BodyBottomWrapper>
            <S.BodyBottomWrapper>
              <S.Guide>· 리뷰 내용을 적어주세요.</S.Guide>
              <S.Warning>
                <span>{props.contentWarning}</span>
              </S.Warning>
              <S.Content onChange={props.onChangeContent} />
            </S.BodyBottomWrapper>
          </S.BodyWrapper>
          <S.ButtonWrapper>
            <S.SubmitButton
              isSubmit={true}
              onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            >
              {props.isEdit ? '수정하기' : '리뷰 작성하기'}
            </S.SubmitButton>
            <S.SubmitButton isSubmit={false}>작성 취소하기</S.SubmitButton>
          </S.ButtonWrapper>
        </S.MainWrapper>
      </S.Wrapper>
    </>
  )
}
