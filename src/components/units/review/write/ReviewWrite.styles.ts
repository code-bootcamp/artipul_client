import styled from '@emotion/styled'

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
  /* width: 20vw;
  height: 20vw;
  border: dashed;
  border-radius: 7.2px;
  border-color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    width: 10%;
    height: 10%;
    margin-bottom: 0.25rem;
  }
  & div {
    color: #dddddd;
  }
  cursor: pointer; */
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

export const ImageWrapper = styled.div`
  /* height: ; */
  display: flex;
  justify-content: space-between;
  /* background-color: green; */
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
