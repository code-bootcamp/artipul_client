import styled from '@emotion/styled'

export const ArtWorkSelectPictureWrapper = styled.div`
  display: flex;
  flex-direction: row;
  & select {
    outline: 0;
  }
`
export const Select2Word = styled.select`
  width: 5.438rem;
  height: 2.375rem;
  border-radius: 36px;
  margin-right: 0.75rem;
  padding-left: 0.8rem;
  color: ${(props) => (props.artCategory ? '#fff' : '#aaa')};
  background-color: ${(props) => (props.artCategory ? '#f64612' : '#fff')};
  border: ${(props) =>
    props.artCategory ? '1px solid #f64612' : '1px solid #111'};
`

export const Select3Word = styled.select`
  width: 6.25rem;
  height: 2.375rem;
  border-radius: 36px;
  margin-right: 0.75rem;
  padding-left: 0.8rem;
  color: ${(props) => (props.artCategory ? '#fff' : '#aaa')};
  background-color: ${(props) => (props.artCategory ? '#f64612' : '#fff')};
  border: ${(props) =>
    props.artCategory ? '1px solid #f64612' : '1px solid #111'};
`

export const Select4Word = styled.select`
  width: 7.063rem;
  height: 2.375rem;
  border-radius: 36px;
  margin-right: 0.75rem;
  padding-left: 0.8rem;
  color: ${(props) => (props.artCategory ? '#fff' : '#aaa')};
  background-color: ${(props) => (props.artCategory ? '#f64612' : '#fff')};
  border: ${(props) =>
    props.artCategory ? '1px solid #f64612' : '1px solid #111'};
`
