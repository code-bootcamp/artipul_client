import * as S from './MainScrollButton.Styles'

export default function MainScrollButtonPresenter(props) {
  return (
    <>
      <S.ScrollButtonWrapper onClick={props.onClickScrollDown}>
        ⬇️
      </S.ScrollButtonWrapper>
    </>
  )
}
