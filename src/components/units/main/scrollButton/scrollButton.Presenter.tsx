import * as S from './scrollButton.Styles'

export default function ScrollButtonPresenter(props) {
  return (
    <>
      <S.ScrollButtonWrapper onClick={props.onClickScrollDown}>
        ⬇️
      </S.ScrollButtonWrapper>
    </>
  )
}
