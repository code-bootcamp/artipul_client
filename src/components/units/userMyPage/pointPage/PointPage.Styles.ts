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
export const SmallHeadWrapper = styled.div`
  width: 100%;
  padding: 40px 0px;
`
export const TitleAmountSpan = styled.span`
  font-size: 1.575rem;
  color: #f64612;
  padding-right: 2px;
  font-weight: 700;
`
export const SmallHead = styled.div`
  max-width: 1140px;
  width: 100%;
  background-color: #eeeeee;
  font-size: 1.25rem;
  padding: 1.25rem 1.56rem;
  font-weight: 700;
`
export const MoneyWrapper = styled.div`
  max-width: 1140px;
  width: 100%;
  height: auto;
  position: relative;
`
export const Money = styled.span`
  width: 100%;
  font-size: 1rem;
  font-weight: 700;
`
export const MoneyBox = styled.span`
  max-width: 240px;
  width: 30%;
  margin: 6px;
  border: 1px solid #aaaaaa;
  padding: 1.9rem 0px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    border: none;
    box-shadow: 0px 4px 15px rgba(246, 70, 18, 0.4);
  }
`
export const WrapperBottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  padding-top: 70px;
`
export const AmountDiv = styled.div`
  font-size: 1.575rem;
  padding-right: 3rem;
  padding-top: 0.5rem;
`
export const AmountSpan = styled.span`
  font-size: 1.875rem;
  color: #f64612;
  padding-right: 2px;
  font-weight: 700;
`
export const ChargeButton = styled.button`
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
export const TableHead = styled.div`
  width: 1140px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  background-color: #eeeeee;
  padding: 1rem 0rem;
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
  grid-template-columns: repeat(5, 1fr);
`
export const TableRowMenu = styled.span`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  color: #111111;
  border-right: 1px solid #eeeeee;
`

export const TableRowLastMenu = styled.span`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  color: #111111;
`
export const PagiDiv = styled.div`
  padding: 2rem;
`
