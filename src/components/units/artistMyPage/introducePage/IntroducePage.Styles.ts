import styled from '@emotion/styled'
import { BreakPoints } from '../../../../commons/styles/media'

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 50px;
  position: relative;
  > div {
    max-width: 1140px;
    width: 100%;
  }
  @media ${BreakPoints.mobile} {
    padding: 20px 0.5rem;
  }
`
export const EditWrapper = styled.div``
export const Header = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 1.5625rem;
`
export const SmallHeadWrapper = styled.div`
  width: 100%;
  padding: 40px 0px;
`
export const SmallHead = styled.div`
  max-width: 1140px;
  width: 100%;
  background-color: #eeeeee;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 1.25rem 1.56rem;
`
export const WrapperBottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  padding-top: 70px;
`
export const SaveButton = styled.button`
  width: 20%;
  padding: 1rem 1.5rem;
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
