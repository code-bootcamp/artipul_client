import MainHeaderContainer from '../main/ mainHeader/mainHeader.Container'
import Section2Presenter from '../main/section2/Section2.Presenter'
import * as S from './AboutUs.Styles'
import AboutUsContentContainer from './aboutUsContent/AboutUsContent.Container'
import AboutUsScrollButtonContainer from './aboutUsScrollButton/AboutUsScrollButton.Container'

export default function AboutUsPresenter(props) {
  return (
    <>
      <MainHeaderContainer />
      <AboutUsScrollButtonContainer outerDivRef={props.outerDivRef} />
      <S.AboutUsWrapper ref={props.outerDivRef}>
        <div className="inner">
          <Section2Presenter />
        </div>
        <AboutUsContentContainer />
      </S.AboutUsWrapper>
    </>
  )
}
