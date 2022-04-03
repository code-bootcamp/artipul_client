import * as S from './ReadImage.Styles'

export default function ReviewImageContainer() {
  const classmates = ['/fox.png', '/article.png', '/human.png']
  const aaa = classmates.map((el) => <S.Dots src={el} />)
  return (
    <S.SideWrapper>
      <S.BigPhotoWrapper>
        <S.BigPhoto src="/fox.png" />
      </S.BigPhotoWrapper>
      <S.DotsWrapper>{aaa}</S.DotsWrapper>
    </S.SideWrapper>
  )
}
