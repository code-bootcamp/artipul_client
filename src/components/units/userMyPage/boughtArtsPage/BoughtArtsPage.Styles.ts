import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  padding: 50px 50px;
  position: relative;
  > div {
    max-width: 1140px;
    width: 100%;
  }
`
export const Header = styled.h1`
  width: 100%;
  font-weight: 700;
  font-size: 1.5625rem;
`

export const TableHead = styled.div`
  width: 1140px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  background-color: #eeeeee;
  padding: 1rem 0.5rem;
  margin-top: 2.6rem;
`
export const TableHeadMenu = styled.span`
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
`
export const TableRow = styled.div`
  width: 1140px;
  border-bottom: 1px solid #eeeeee;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`
export const TableRowMenu = styled.span`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  color: #111111;
  border-right: 1px solid #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TableRowImg = styled.img`
  width: 80%;
  height: 80%;
`
export const ReviewButton = styled.button`
  width: 70%;
  height: 40px;
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
