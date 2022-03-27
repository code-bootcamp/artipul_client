import styled from '@emotion/styled'

interface ISelectTypesProps {
  title: string
  onClick: () => void
}

const SelectType = styled.div`
  width: 100%;
  height: 128px;
  border: 2px solid lightgray;
  border-radius: 5px;
  margin: 24px 0px;
  line-height: 128px;
  text-align: center;
  font-size: 1.1rem;
  font-weight: 700;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    opacity: 0.8;
    color: white;
    transform: scale(1.02);
    background-color: #f64612;
  }
`
export default function SelectTypes(props: ISelectTypesProps) {
  return <SelectType onClick={props.onClick}>{props.title}</SelectType>
}
