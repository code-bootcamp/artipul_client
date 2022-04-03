import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
`

export const CommentSubject = styled.div`
  margin-top: 1.969rem;
  margin-bottom: 1.25rem;

  & span {
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #111;
  }
`

export const CommentWrapper = styled.div``

export const ContentWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  padding: 1rem;
  border-radius: 1rem;
  border: solid 0.125rem #ddd;
  background-color: #fff;
  gap: 1.5%;
`

export const Contents = styled.textarea`
  width: 100%;
  min-height: 1rem;
  border: none;
  resize: none;
  white-space: normal;
`

export const Button = styled.button`
  min-width: 8%;
  font-size: 1.125rem;
  background-color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;

  font-family: Pretendard;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #aaa;
`
