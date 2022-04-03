import * as S from './CreateComment.Styles'

export default function CreateCommentPresenter(props) {
  return (
    <>
      <S.Wrapper>
        <S.CommentWrapper>
          {!props.isEdit && (
            <S.CommentSubject>
              <span>댓글 </span>
              <span style={{ color: '#f64612' }}>5</span>
            </S.CommentSubject>
          )}
          <S.ContentWrapper>
            <S.Contents
              maxLength={100}
              defaultValue={props.el?.content}
              onChange={props.onChangeContent}
              type="text"
              onChange={props.onChangeContent}
            />
            <S.Button
              onClick={
                props.isEdit ? props.onClickUpdate : props.onClickCreateComment
              }
            >
              {props.isEdit ? '수정' : '등록'}
            </S.Button>
          </S.ContentWrapper>
        </S.CommentWrapper>
      </S.Wrapper>
    </>
  )
}
