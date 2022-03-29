import styled from '@emotion/styled'
export const Wrapper = styled.div`
  width: 100%;
  padding: 100px 10px;
  position: relative;
  > div {
    max-width: 1140px;
    width: 100%;
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
  padding: 1.5rem;
`
export const WrapperBody = styled.div`
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
`
export const BodyBox = styled.div`
  width: 45%;
  height: auto;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 1rem;
`
export const InputButtonBox = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  padding: 1rem;
`
export const InputBox = styled.div`
  width: 100%;
`
export const AuthButton = styled.button`
  width: 38%;
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
export const CreateUserSmallTitles = styled.div`
  font-size: 1rem;
  font-weight: 700;
  padding-top: 24px;
  padding-left: 2rem;
`
