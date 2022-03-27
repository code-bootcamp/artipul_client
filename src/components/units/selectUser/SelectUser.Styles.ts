import styled from '@emotion/styled'

export const Wrapper = styled.div`
  width: 100%;
  padding: 100px 10px;
  position: relative;
  > div {
    max-width: 440px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
`
export const Header = styled.h1`
  font-size: 1.563rem;
`
export const SmallHeader = styled.h2`
  font-size: 1.125rem;
  padding-top: 30px;
`
export const SelectTypeBox = styled.div`
  width: 100%;
`
