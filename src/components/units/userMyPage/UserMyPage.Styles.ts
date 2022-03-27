import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 5.25rem 3.25rem;
`
export const WrapperLeftBody = styled.div`
  width: 100%;
  height: 60vh;
  border-right: 1px solid #cccccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 10px;
`
export const WrapperLeftBodyAr = styled.div`
  width: 100%;
  height: 50vh;
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
