import Section0Presenter from './section0/Section0.Presenter'
import * as S from './Main.Styles'
import Section1Presenter from './section1/Section1.Presenter'
import Section2Presenter from './section2/Section2.Presenter'
import Section3Presenter from './section3/Section3.Presenter'
import Section4Presenter from './section4/Section4.Presenter'
import MainHeaderContainer from './ mainHeader/mainHeader.Container'

export default function MainPresenter(props) {
  return (
    <>
      <Section0Presenter />
      <MainHeaderContainer />
      <S.MainWrapper ref={props.outerDivRef}>
        <div className="inner">
          <Section1Presenter />
        </div>
        <div className="inner">
          <Section2Presenter />
        </div>
        <div className="inner">
          <Section3Presenter />
        </div>
        <Section4Presenter />
      </S.MainWrapper>
    </>
  )
}
