import styled from '@emotion/styled'

export const Section0Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #f64612;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 56px;
  font-weight: bolder;
  z-index: 9999;
  animation-name: section0Animation;
  animation-timing-function: ease-in-out;
  animation-duration: 4.5s;
  animation-delay: 0.6s;
  -webkit-animation-fill-mode: forwards;
  @keyframes section0Animation {
    0% {
      opacity: 1;
      transform: translate(0, 0);
    }
    20% {
      opacity: 1;
      transform: translate(0, 0);
    }
    80% {
      opacity: 1;
      transform: translate(0, 0);
    }
    100% {
      opacity: 0;
      transform: translate(0, -100%);
    }
  }
`

export const TitleBox = styled.div`
  width: 700px;
  height: 56px;
  position: relative;
`

export const MainTitle1 = styled.div`
  width: 700px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-transform: uppercase;
  & span {
    opacity: 0;
    font-size: 72px;
    animation-name: titleAnimation1;
    animation-timing-function: ease;
    animation-duration: 1.8s;
    animation-delay: 0.6s;
    -webkit-animation-fill-mode: forwards;

    /* 
   */
  }
  @keyframes titleAnimation1 {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export const MainTitle2 = styled.div`
  width: 700px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-transform: uppercase;
  & span {
    opacity: 0;
    font-size: 72px;
    animation-name: titleAnimation2;
    animation-timing-function: ease;
    animation-duration: 3.4s;
    animation-delay: 0.6s;
    -webkit-animation-fill-mode: forwards;

    &:first-child {
      animation-delay: 2.3s;
    }

    &:last-child {
      color: $secondary-color;
      animation-delay: 2.6s;
    }
  }
  @keyframes titleAnimation2 {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`
