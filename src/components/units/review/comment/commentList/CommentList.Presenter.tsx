import * as S from './CommentList.Styles'

export default function CommentListPresenter(props) {
  console.log(props.data)
  return (
    <>
      <S.Wrapper>
        <S.AvatarWapper>
          <S.Avatar />
        </S.AvatarWapper>
        <S.CommentBodyWrapper>
          <S.CommentBodyTop>
            <S.NickName>cheche0011</S.NickName>
            <S.CommentContent>
              제가 완전 좋아하는 작가! 빨리 다음작품도 보고 싶어요. 제가 완전
              좋아하는 작가! 빨리 다음작품도 보고 싶어요. 제가 완전 좋아하는
              작가! 빨리 다음작품도 보고 싶어요. 제가 완전 좋아하는 작가! 빨리
              다음작품도 보고 싶어요.
            </S.CommentContent>
          </S.CommentBodyTop>
          <S.CommentBodyBottom>
            <S.CreatedDate>04/02</S.CreatedDate>
            <S.MiddlePoint>·</S.MiddlePoint>
            <S.CommentReply>대댓글 달기</S.CommentReply>
          </S.CommentBodyBottom>
        </S.CommentBodyWrapper>
      </S.Wrapper>
    </>
  )
}
