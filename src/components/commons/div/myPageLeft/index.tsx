import styled from '@emotion/styled'
import { ChangeEvent, RefObject } from 'react'

interface IMyPageLeftProps {
  data: any
  url: string
  fileRef: RefObject<HTMLInputElement>
  onChangeImageUrl: (e: ChangeEvent<HTMLInputElement>) => void
  clickImage: boolean
  onClickChangeProfileImage: () => void
  onClickEdit: () => void
}

const WrapperLeft = styled.div`
  width: 100%;
  height: auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
`

const WrapperLeftBody = styled.div`
  font-size: 1rem;
  padding: 1rem;
  font-weight: 700;
`
const WrapperLeftButton = styled.button`
  width: 80%;
  height: 2.2rem;
  border: 1px solid #aaaaaa;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 700;
  background-color: #fffdfd;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    background-color: orange;
    color: white;
    border: none;
    transform: scale(1.02);
  }
`
export default function MyPageLeft(props: IMyPageLeftProps) {
  const head = `https://storage.googleapis.com`
  return (
    <WrapperLeft>
      <div>
        <img
          style={{
            width: '142px',
            height: '142px',
            borderRadius: '50%'
          }}
          src={
            props.url
              ? `${head}${props.url}`
              : props.data?.fetchProfile?.url
              ? `${head}${props.data?.fetchProfile.url}`
              : `/basic.png`
          }
        />
        <input
          type="file"
          ref={props.fileRef}
          style={{ display: 'none' }}
          onChange={props.onChangeImageUrl}
        />
      </div>
      <WrapperLeftBody>
        {props.data?.fetchProfile.user.nickname}
      </WrapperLeftBody>
      {props.clickImage ? (
        <WrapperLeftButton onClick={props.onClickChangeProfileImage}>
          변경사항 저장
        </WrapperLeftButton>
      ) : (
        <WrapperLeftButton onClick={props.onClickEdit}>
          프로필 설정
        </WrapperLeftButton>
      )}
    </WrapperLeft>
  )
}
