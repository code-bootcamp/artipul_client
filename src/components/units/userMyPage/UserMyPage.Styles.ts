import styled from '@emotion/styled'
import { BreakPoints } from '../../../commons/styles/media'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 5.25rem 3.25rem;
`
export const WrapperLeftBody = styled.div`
  width: 100%;
  height: 70vh;
  border-right: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 10px;
`
export const WrapperLeftBodyAr = styled.div`
  width: 100%;
  height: 65vh;
  border-right: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 10px;
`
export const LeftBodyMenu = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  margin-top: 1rem;
`
export const ClickMenus = styled.div`
  font-size: 1.025rem;
  color: #aaaaaa;
  cursor: pointer;
  transform: 0.1s;
  :hover {
    transform: scale(1.01);
  }
`
export const ReviewBox = styled.div`
  width: 100%;
  padding-top: 20px;
`
export const ReviewButton = styled.button`
  width: 80%;
  height: 45px;
  margin-left: 10px;
  font-size: 0.9rem;
  background-color: '#eeeeee';
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    background-color: #f64612;
    color: white;
  }
`
export const RightBody = styled.div`
  @media ${BreakPoints.mobile} {
  }
`
