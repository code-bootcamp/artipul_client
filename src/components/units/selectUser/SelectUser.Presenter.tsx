import SelectTypes from '../../commons/div/selectUser'
import * as S from './SelectUser.Styles'
import { ISelectUserProps } from './SelectUser.Types'

export default function SelectUserPresenter(props: ISelectUserProps) {
  return (
    <S.Wrapper>
      <div>
        <S.Header>회원가입</S.Header>
        <S.SmallHeader>가입하고자 하는 회원 유형을 선택해주세요</S.SmallHeader>
        <S.SelectTypeBox>
          <SelectTypes
            onClick={props.onClickCreateArtist}
            title="미대생 회원"
          />
        </S.SelectTypeBox>
        <S.SelectTypeBox>
          <SelectTypes
            onClick={props.onClickCreateNoArtist}
            title="일반 회원"
          />
        </S.SelectTypeBox>
      </div>
    </S.Wrapper>
  )
}
