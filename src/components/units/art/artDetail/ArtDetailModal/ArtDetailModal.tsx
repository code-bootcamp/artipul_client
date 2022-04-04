import * as S from './ArtDetailModal.Styles'

export default function ArttDetailModal(props) {
  return (
    <S.ArtDetailModalWrapper>
      <S.ArtDetailModalRow>
        <S.ArtDetailModalTitle> 보유 포인트 : </S.ArtDetailModalTitle>
        <S.ArtDetailModalPoint>
          ₩ {props.userPoint}
          {/* ₩{props.userPoint.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}*/}
        </S.ArtDetailModalPoint>
      </S.ArtDetailModalRow>
      <S.ArtDetailModalRow>
        <S.ArtDetailModalTitle>입찰 금액 : ₩</S.ArtDetailModalTitle>
        <S.ArtDetailModalInput
          onChange={props.onChangeBuyPrice}
          type="number"
          defaultValue={props.price + 1}
          min={props.price + 1}
        />
      </S.ArtDetailModalRow>
    </S.ArtDetailModalWrapper>
  )
}
