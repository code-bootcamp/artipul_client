import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  /* border: 1px solid lightgray; */
  display: flex;
  margin-top: 2.5rem;
`

export const AvatarWapper = styled.div`
  border: none;
  padding-right: 0.625rem;
  height: 100%;
`

export const Avatar = styled.img`
  width: 2.875rem;
  height: 2.87rem;
  border: none;
  border-radius: 50%;
  background-color: #c4c4c4;
`

export const CommentBodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const CommentBodyTop = styled.div`
  display: flex;
`
export const NickName = styled.div`
  margin-right: 0.5rem;

  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #111;
`

export const CommentContent = styled.div`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #111;
`

export const CommentBodyBottom = styled.div`
  display: flex;
  margin-top: 0.625rem;
  display: flex;
  justify-content: left;
  gap: 1rem;
  & div {
    font-size: 0.938rem;
    color: #aaa;
  }
`

export const CreatedDate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`

export const MiddlePoint = styled.div`
  /* font-weight: bold; */
`

export const CommentReply = styled.div`
  flex-grow: 0;
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #aaa;
  cursor: pointer;
`
