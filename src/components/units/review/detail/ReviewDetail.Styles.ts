import styled from '@emotion/styled'
import { Dropdown } from 'antd'

export const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  border: none;
  padding: 8% 8% 8% 8%;
  display: flex;
  gap: 5%;
`

export const Right = styled.div``
export const Left = styled.div``

export const HeaderWrapper = styled.div`
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 0.969rem;
`
export const profileInfo = styled.div`
  display: flex;
  /* flex-direction: row; */
  align-items: center;
`

export const Avatar = styled.img`
  width: 2.875rem;
  height: 2.875rem;
  border: none;
  background-color: #c4c4c4;
  border-radius: 50%;
`

export const nickName = styled.div`
  margin-left: 1rem;

  font-family: Pretendard;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #111;
`

export const IconInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

export const IconWrapper = styled.div`
  width: 2.875rem;
  height: 2.875rem;
  border: 1px solid #dcdcdc;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  /* box-sizing: border-box; */
  cursor: pointer;
  .ant-dropdown-link {
    margin-top: 7px;
  }
  & span {
    display: none;
  }
  .ant-dropdown {
    min-width: 100px !important;
  }
  .ant-dropdown-menu {
    min-width: 100px !important;
  }
  /* a:active {
    background-color: #dcdcdc;
  } */
  /* a:visited {
    background-color: #dcdcdc;
  } */

  background-color: ${(props) => (props.isTrue ? '#dcdcdc' : 'white')};
`

export const DropDown = styled(Dropdown)`
  /* div,
  ul,
  li {
    min-width: 100px !important;
  }
  .ant-dropdown {
    min-width: 100px !important;
  }
  .ant-dropdown-menu {
    min-width: 100px !important;
  } */
  min-width: 0px;
  /* left: 50px; */
`

export const BodyWrapper = styled.div`
  margin-top: 1.969rem;
  margin-bottom: 1.969rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

export const ReviewTitle = styled.h1`
  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #111;
`

export const ReviewContent = styled.div`
  margin-top: 1.25rem;
  min-height: 15.5rem;
  :focus {
    outline: none;
  }

  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  /* line-height: 1.77; */
  letter-spacing: normal;
  text-align: left;
  color: #111;
`

export const TagWrapper = styled.div`
  display: flex;
  justify-content: left;
  gap: 0.75rem;
  border-bottom: 1px solid #dcdcdc;
  padding-bottom: 1.219rem;
`

export const Tag = styled.div`
  background-color: #dcdcdc;
  border-radius: 3px;
  padding: 0.3rem 0.8rem;

  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #111;
`
