import styled from '@emotion/styled'
import { ISocialLoginProps } from './SocialLogin.Types'
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
    position: relative;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0%);
  }
`
export const Header = styled.h1`
  font-size: 1.563rem;
  padding-bottom: 20px;
`
export const InputButtonBox = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`
export const InputBox = styled.div`
  width: 100%;
`
export const Count = styled.span`
  font-size: 0.9rem;
  color: darkgrey;
`
export const CreateUserYupInputs = styled.input`
  outline: 0;
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid #cccccc;
  font-size: 1.1rem;
  padding-top: 1rem;
  margin-bottom: 12px;
`
export const UpdateButtonBox = styled.div`
  width: 100%;
  padding-top: 2rem;
`
export const CreateUserButton = styled.button`
  background-color: ${(props: ISocialLoginProps) =>
    props.checkPhoneAuth && props.nicknameAuth ? '#f64612' : '#eeeeee'};
  color: ${(props) =>
    props.checkPhoneAuth && props.nicknameAuth ? 'white' : 'black'};
  font-size: 1rem;
  width: 100%;
  height: 55px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
