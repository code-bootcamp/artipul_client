import styled from '@emotion/styled'
import { CloseOutlined } from '@ant-design/icons'

interface IProps {
  isSubmit: boolean
}

export const Wrapper = styled.div`
  width: 90%;
  border: 1px solid black;
  margin: auto;
  padding: 8% 8% 8% 8%;
`
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Subject = styled.div`
  color: #111;
  font-size: 1.75rem;
  font-weight: bold;
  font-family: Pretendard;
`

export const BodyWrapper = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 4rem;
`
export const LabelGuideWrapper = styled.div`
  margin-bottom: 2rem;

  display: flex;
  justify-content: left;
  align-items: flex-end;
  gap: 1rem;
`

export const BodyBottomWrapper = styled.div`
  margin-top: 2rem;
`

export const Label = styled.div`
  color: #f64612;
  font-size: 1.25rem;
  font-weight: bold;
`

export const Guide = styled.div`
  font-size: 1.125rem;
  vertical-align: bottom;
`

export const Warning = styled.span`
  color: red;
`

export const Upload = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 21.5vw;
  height: 21.5vw;
  background-color: #eee;
  cursor: pointer;
`
export const UploadBtn = styled.div`
  width: 11vw;
  height: 3vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: solid 1px #aaa;
  font-size: 0.925rem;
  font-weight: bold;
`

export const SelectedArtImg = styled.img`
  width: 21.5vw;
  height: 21.5vw;
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.input`
  width: 100%;
  height: 3%;
  background-color: #fff;
  border: solid 2px #ddd;
  border-radius: 0.4rem;
  margin-top: 1.25rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
`

export const Content = styled.textarea`
  width: 100%;
  height: 10.5rem;
  border: solid 2px #ddd;
  border-radius: 0.4rem;
  resize: none;
  white-space: normal;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  margin-top: 1.25rem;
`

export const SubmitButton = styled.button`
  background-color: ${(props: IProps) =>
    props.isSubmit ? '#f64612' : '#EEEEEE'};
  color: ${(props: IProps) => (props.isSubmit ? 'white' : 'black')};
  border: none;
  padding: 1%;
  cursor: pointer;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  gap: 1rem;
`

export const CustomModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 40vw;
  position: absolute;
  left: 40%;
  right: 0%;
  top: 30%;
  bottom: 5%;

  background: #ffffff;
  box-shadow: 2px 6px 20px 3px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  padding: 3.3rem 4.25rem;

  overflow: scroll;
`

export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: gree;
`

export const xIcon = styled(CloseOutlined)`
  svg {
    font-size: 2rem;
    transition: 0.2s;
    :hover {
      border: none;
      transform: scale(1.2);
      transition: all 0.3s ease-in-out;
    }
  }
  cursor: pointer;
`

export const ModalSubject = styled.div`
  width: auto;
  font-size: 1.75rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
`

export const ListWrapper = styled.div`
  margin-top: 1.4rem;
  width: 30vw;
  height: 11rem;
  display: flex;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 2.25rem;
`

export const ListLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 100%;
`

export const Thumbnail = styled.img`
  width: 6.5rem;
  height: 6.5rem;
`

export const ListRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ArtInfo = styled.div`
  width: 100%;
  height: 6.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 3%;
  cursor: pointer;
`

export const ArtTitle = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

export const ArtistInfo = styled.div`
  display: flex;
  justify-content: left;
  gap: 1rem;
`

export const Artist = styled.div`
  font-size: 0.93rem;
  font-weight: bold;
  margin-bottom: 3rem;
`

export const ArtistName = styled.div`
  font-size: 0.93rem;
`
