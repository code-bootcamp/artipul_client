import * as S from './AboutUsScrollButton.Styles'

export default function AboutUsScrollButtonPresenter(props) {
  return (
    <>
      <S.ScrollButtonWrapper onClick={props.onClickScrollDown}>
        ⬇️
      </S.ScrollButtonWrapper>
    </>
  )
}
