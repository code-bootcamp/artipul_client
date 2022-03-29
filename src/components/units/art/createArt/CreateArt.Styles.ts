import styled from '@emotion/styled'

export const CreateArtWrapper = styled.div`
  width: 100%;
  height: auto;
  padding-left: 16.25rem;
  padding-right: 16.125rem;
  padding-top: 6.5rem;
`

export const CreateArtMainTitle = styled.div`
  font-family: Pretendard;
  font-size: 1.563rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #111;
`

export const CreateArtSubTitle = styled.div`
  margin-top: 2.5rem;
  font-family: Pretendard;
  font-size: 1.25rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #f64612;
`

export const CreateArtTitleBox = styled.div`
  margin-top: 2rem;
`

export const CreateArtTitle = styled.div`
  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #111;
`

export const CreateArtTitleInput = styled.input`
  width: 45.75rem;
  height: 2.5rem;
  border: none;
  border-bottom: 2px solid #ccc;
  margin-top: 1.5rem;
  outline: 0;
  text-align: right;
`

export const CreateArtImageBox = styled.div`
  margin-top: 7.531rem;
`

export const CreateArtImageInputButtonBox = styled.div`
  margin-top: 2rem;
  width: 25rem;
  height: 25rem;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CreateArtImageInputButton = styled.div`
  width: 12.5rem;
  height: 3.75rem;
  background-color: #eee;
  :hover {
    background-color: #fff;
  }
  border: solid 2px #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #111;
  cursor: pointer;
`

export const CreateArtImageInputImageBox = styled.div`
  margin-top: 2rem;
  width: 25rem;
  height: 25rem;
  background-color: #eee;
`

export const CreateArtImageInputImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${(props) =>
    `url(https://storage.googleapis.com${props.image_url})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
`

export const CreateArtCategoryBox = styled.div`
  margin-top: 7.5rem;
  height: 12.5rem;
`

export const CreateArtCategorySelectBox = styled.div`
  margin-top: 2rem;
  height: 6.125rem;
  width: 30rem;
  display: flex;
  justify-content: space-between;
`

export const CreateArtCategorySelect = styled.select`
  height: 2.125rem;
  width: 6.5rem;
`

export const CreateArtDescriptionBox = styled.div`
  margin-bottom: 10rem;
`

export const CreateArtDescriptionInput = styled.textarea`
  resize: none;
  margin-top: 2rem;
  width: 87.625rem;
  height: 25rem;
  white-space: pre-line;
`

export const CreateArtDeadlineBox = styled.div`
  margin-top: 2rem;
`

export const CreateArtDeadline = styled.input`
  margin-top: 2rem;
  width: 10rem;
  height: 2.125rem;
`

export const CreateArtPriceBox = styled.div`
  margin-top: 7.813rem;
`

export const CreateArtPriceInput = styled.input`
  width: 16.5rem;
  height: 2.5rem;
  border: none;
  border-bottom: 2px solid #ccc;
  margin-top: 1.5rem;
  outline: 0;
  text-align: right;
`

export const CreateArtButtonBox = styled.div`
  margin-top: 7.531rem;
  width: 100%;
  height: 3.75rem;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 13.5rem;
`

export const CreateArtSubmitButton = styled.div`
  margin-right: 1.25rem;
  width: 12.5rem;
  height: 3.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f64612;
  color: #fff;
  cursor: pointer;
`

export const CreateArtCancleButton = styled.div`
  width: 12.5rem;
  height: 3.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  color: #111;
  cursor: pointer;
`
