import UploadImageContainer from '../uploadImage/UploadImage.Container'
import * as S from './ReviewWrite.styles'

export default function ReviewPreview(props) {
  console.log(props.completedArtsData)
  return (
    <>
      {props.isOpen && (
        <S.CustomModal>
          <S.IconWrapper>
            <S.xIcon onClick={props.onClickCloseModal} />
          </S.IconWrapper>
          <S.ModalSubject>구매내역</S.ModalSubject>
          <S.ListWrapper>
            <S.ListLeft>
              <S.Thumbnail src="/fox.png" />
            </S.ListLeft>
            <S.ListRight>
              <S.ArtInfo>
                <S.ArtTitle>따듯한 여우</S.ArtTitle>
                <S.ArtistInfo>
                  <S.Artist>작가</S.Artist>
                  <S.ArtistName>김진아</S.ArtistName>
                </S.ArtistInfo>
              </S.ArtInfo>
            </S.ListRight>
          </S.ListWrapper>
          <S.ListWrapper>
            <S.ListLeft>
              <S.Thumbnail src="/fox.png" />
            </S.ListLeft>
            <S.ListRight>
              <S.ArtInfo>
                <S.ArtTitle>따듯한 여우</S.ArtTitle>
                <S.ArtistInfo>
                  <S.Artist>작가</S.Artist>
                  <S.ArtistName>김진아</S.ArtistName>
                </S.ArtistInfo>
              </S.ArtInfo>
            </S.ListRight>
          </S.ListWrapper>
          <S.ListWrapper>
            <S.ListLeft>
              <S.Thumbnail src="/fox.png" />
            </S.ListLeft>
            <S.ListRight>
              <S.ArtInfo>
                <S.ArtTitle>따듯한 여우</S.ArtTitle>
                <S.ArtistInfo>
                  <S.Artist>작가</S.Artist>
                  <S.ArtistName>김진아</S.ArtistName>
                </S.ArtistInfo>
              </S.ArtInfo>
            </S.ListRight>
          </S.ListWrapper>
          <S.ListWrapper>
            <S.ListLeft>
              <S.Thumbnail src="/fox.png" />
            </S.ListLeft>
            <S.ListRight>
              <S.ArtInfo>
                <S.ArtTitle>따듯한 여우</S.ArtTitle>
                <S.ArtistInfo>
                  <S.Artist>작가</S.Artist>
                  <S.ArtistName>김진아</S.ArtistName>
                </S.ArtistInfo>
              </S.ArtInfo>
            </S.ListRight>
          </S.ListWrapper>
          <S.ListWrapper>
            <S.ListLeft>
              <S.Thumbnail src="/fox.png" />
            </S.ListLeft>
            <S.ListRight>
              <S.ArtInfo>
                <S.ArtTitle>따듯한 여우</S.ArtTitle>
                <S.ArtistInfo>
                  <S.Artist>작가</S.Artist>
                  <S.ArtistName>김진아</S.ArtistName>
                </S.ArtistInfo>
              </S.ArtInfo>
            </S.ListRight>
          </S.ListWrapper>
          <S.ListWrapper>
            <S.ListLeft>
              <S.Thumbnail src="/fox.png" />
            </S.ListLeft>
            <S.ListRight>
              <S.ArtInfo>
                <S.ArtTitle>따듯한 여우</S.ArtTitle>
                <S.ArtistInfo>
                  <S.Artist>작가</S.Artist>
                  <S.ArtistName>김진아</S.ArtistName>
                </S.ArtistInfo>
              </S.ArtInfo>
            </S.ListRight>
          </S.ListWrapper>
          <S.ListWrapper>
            <S.ListLeft>
              <S.Thumbnail src="/fox.png" />
            </S.ListLeft>
            <S.ListRight>
              <S.ArtInfo>
                <S.ArtTitle>따듯한 여우</S.ArtTitle>
                <S.ArtistInfo>
                  <S.Artist>작가</S.Artist>
                  <S.ArtistName>김진아</S.ArtistName>
                </S.ArtistInfo>
              </S.ArtInfo>
            </S.ListRight>
          </S.ListWrapper>
        </S.CustomModal>
      )}

      <S.Wrapper>
        <S.MainWrapper>
          <S.Subject>리뷰 {props.isEdit ? '수정하기' : '작성하기'}</S.Subject>

          <S.BodyWrapper>
            <S.LabelGuideWrapper>
              <S.Label>01. 작품 선택</S.Label>
              <S.Guide>리뷰를 작성하고 싶은 작품을 선택해주세요.</S.Guide>
            </S.LabelGuideWrapper>
            <S.Upload onClick={props.onClickSelectArt}>
              <S.UploadBtn>작품 선택하기</S.UploadBtn>
            </S.Upload>
          </S.BodyWrapper>

          <div>리뷰할 작품 선택하기</div>
          <div>
            {props.completedArtsData?.fetchTransactionCompledArts?.map(
              (el, index) => (
                <div key={el.id}>
                  <div>
                    <img src={el.thumbnail} />
                  </div>
                  <div>{el.title}</div>
                  <div>{index + 1}</div>
                </div>
              )
            )}
            {/* {new Array(4).fill(1).map((el, index) => (
              <div key={el.id} style={{ border: '1px solid black' }}>
                <div>
                  <img src={el.thumbnail} />
                </div>
                <div>{el.title}</div>
                <div>{index + 1}</div>
              </div>
            ))} */}
          </div>

          <S.BodyWrapper>
            <S.LabelGuideWrapper>
              <S.Label>02. 사진 업로드</S.Label>
              <S.Guide>
                {props.isEdit
                  ? '수정하고 싶은 사진을 클릭해주세요.'
                  : '리뷰를 작성하고 싶은 사진을 올려주세요.'}
              </S.Guide>
            </S.LabelGuideWrapper>
            <S.ImageWrapper>
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
            </S.ImageWrapper>
          </S.BodyWrapper>

          <S.BodyWrapper>
            <S.Label>03. 리뷰 작성</S.Label>
            <S.BodyBottomWrapper>
              <S.Guide>· 제목을 적어주세요.</S.Guide>
              <S.Warning>
                <span>{props.titleWarning}</span>
              </S.Warning>
              <S.Title
                type="text"
                defaultValue={
                  props.data?.fetchBoard.title
                    ? props.data?.fetchBoard.title
                    : ''
                }
                onChange={props.onChangeTitle}
              />
            </S.BodyBottomWrapper>
            <S.BodyBottomWrapper>
              <S.Guide>· 리뷰 내용을 적어주세요.</S.Guide>
              <S.Warning>
                <span>{props.contentWarning}</span>
              </S.Warning>
              <S.Content
                defaultValue={
                  props.data?.fetchBoard.content
                    ? props.data?.fetchBoard.content
                    : ''
                }
                onChange={props.onChangeContent}
              />
            </S.BodyBottomWrapper>
          </S.BodyWrapper>

          <S.ButtonWrapper>
            <S.SubmitButton
              isSubmit={true}
              onClick={
                props.isEdit
                  ? props.onClickUpdateBoard
                  : props.onClickCreateBoard
              }
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
