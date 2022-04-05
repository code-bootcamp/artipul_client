import * as S from './ReviewDetail.Styles'
import { Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import ReviewImageContainer from '../readImage/ReadImage.Container'
import SelectWorkContainer from '../selectWork/SelectWork.Container'

export default function ReviewDetailPresenter(props) {
  const head = `https://storage.googleapis.com`
  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={props.onClickEdit}>
        수정하기
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1" onClick={props.onClickDelete}>
        삭제하기
      </Menu.Item>
    </Menu>
  )
  return (
    <S.Wrapper>
      <S.Left>
        <ReviewImageContainer fetchBoardImages={props.fetchBoardImages} />
        <SelectWorkContainer />
      </S.Left>
      <S.Right>
        <S.HeaderWrapper>
          <S.profileInfo>
            <S.Avatar
              src={
                props.url
                  ? `${head}${props.url}`
                  : props.data?.fetchProfile?.url
                  ? `${head}${props.profile?.fetchProfile.url}`
                  : `/basic.png`
              }
            />
            <S.nickName>{props.data?.fetchBoard.user.nickname}</S.nickName>
          </S.profileInfo>
          <S.IconInfo>
            <S.IconWrapper onClick={props.handleOnClick} isTrue={props.isTrue}>
              {/*  */}

              <S.DropDown overlay={menu} trigger={['click']}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 10C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10Z"
                      fill="#111111"
                    />
                    <path
                      d="M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18Z"
                      fill="#111111"
                    />
                    <path
                      d="M16 26C17.1046 26 18 25.1046 18 24C18 22.8954 17.1046 22 16 22C14.8954 22 14 22.8954 14 24C14 25.1046 14.8954 26 16 26Z"
                      fill="#111111"
                    />
                  </svg>
                  <DownOutlined />
                </a>
              </S.DropDown>
            </S.IconWrapper>
          </S.IconInfo>
        </S.HeaderWrapper>
        <S.BodyWrapper>
          <S.ReviewTitle>{props.data?.fetchBoard.title}</S.ReviewTitle>
          <S.ReviewContent>{props.data?.fetchBoard.content}</S.ReviewContent>
        </S.BodyWrapper>
        <S.TagWrapper>
          <S.Tag>#{props.data?.fetchBoard?.art?.tag1}</S.Tag>
          <S.Tag>#{props.data?.fetchBoard?.art?.tag2}</S.Tag>
          <S.Tag>#{props.data?.fetchBoard?.art?.tag3}</S.Tag>
          <S.Tag>#{props.data?.fetchBoard?.art?.tag4}</S.Tag>
        </S.TagWrapper>
      </S.Right>
    </S.Wrapper>
  )
}
