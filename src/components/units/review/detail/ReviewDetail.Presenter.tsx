import * as S from './ReviewDetail.Styles'
import { Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import CreateCommentContainer from '../comment/CreateComment.Container'
import CommentListContainer from '../comment/commentList/CommentList.Container'
import ReviewImageContainer from '../readImage/ReadImage.Container'
import SelectWorkContainer from '../selectWork/SelectWork.Container'

export default function ReviewDetailPresenter(props) {
  const head = `https://storage.googleapis.com`
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com" onClick={props.onClickEdit}>
          수정하기
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <a href="https://www.aliyun.com" onClick={props.onClickDelete}>
          삭제하기
        </a>
      </Menu.Item>
    </Menu>
  )
  return (
    <S.Wrapper>
      <S.Left>
        <ReviewImageContainer />
        <SelectWorkContainer />
      </S.Left>
      <S.Right>
        <S.HeaderWrapper>
          <S.profileInfo>
            <S.Avatar />
            <S.nickName>{props.data?.fetchBoard.user.nickname}</S.nickName>
          </S.profileInfo>
          <S.IconInfo>
            <S.IconWrapper onClick={props.onClickLike}>
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.7339 1.79979C14.2746 1.79964 13.82 1.89292 13.3965 2.07417C12.9731 2.25542 12.5893 2.521 12.2676 2.85538L11.2532 3.9033C11.0891 4.0725 10.8937 4.20683 10.6784 4.2985C10.463 4.39017 10.232 4.43737 9.99865 4.43737C9.76531 4.43737 9.53428 4.39017 9.31894 4.2985C9.10359 4.20683 8.9082 4.0725 8.74407 3.9033L7.72969 2.85647C7.40791 2.52229 7.02409 2.25686 6.60065 2.07566C6.1772 1.89447 5.72261 1.80115 5.26343 1.80115C4.80424 1.80115 4.34965 1.89447 3.9262 2.07566C3.50276 2.25686 3.11894 2.52229 2.79716 2.85647C2.13573 3.5437 1.76515 4.46833 1.76515 5.43144C1.76515 6.39455 2.13573 7.31917 2.79716 8.00641L3.81155 9.05324L9.99865 15.4382L16.1868 9.05324L17.2012 8.00531C17.8626 7.31826 18.2331 6.39382 18.2331 5.43089C18.2331 4.46796 17.8626 3.54352 17.2012 2.85647C16.8799 2.52165 16.4962 2.25578 16.0726 2.07449C15.6491 1.89321 15.1943 1.80018 14.735 1.80088L14.7339 1.79979ZM14.735 0.000375289C15.4276 0.0001554 16.1134 0.140684 16.7522 0.41376C17.3911 0.686836 17.9702 1.08699 18.4558 1.59086C19.4453 2.6143 20 3.99398 20 5.43144C20 6.8689 19.4453 8.24857 18.4558 9.27201L17.4414 10.3188L9.99758 18L2.5559 10.3188L1.54151 9.27092C0.553649 8.24684 0 6.86765 0 5.43089C0 3.99413 0.553649 2.61494 1.54151 1.59086C2.02729 1.08705 2.60652 0.686922 3.24543 0.413793C3.88434 0.140664 4.57015 0 5.26289 0C5.95563 0 6.64144 0.140664 7.28035 0.413793C7.91926 0.686922 8.49849 1.08705 8.98427 1.59086L9.99865 2.63769L11.0141 1.59086C11.4996 1.08717 12.0785 0.687199 12.7172 0.414306C13.3559 0.141413 14.0414 0.00106891 14.7339 0.00146908L14.735 0.000375289Z"
                  fill="#222222"
                />
              </svg>
            </S.IconWrapper>

            <S.IconWrapper onClick={props.handleOnClick} isTrue={props.isTrue}>
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
          <S.Tag>#{props.data?.fetchBoard.art.tag1}</S.Tag>
          <S.Tag>#회화</S.Tag>
          <S.Tag>#인물</S.Tag>
          <S.Tag>#소</S.Tag>
          <S.Tag>#정방향</S.Tag>
        </S.TagWrapper>
        {/* <CreateCommentContainer /> */}
        <CommentListContainer />
      </S.Right>
    </S.Wrapper>
  )
}
