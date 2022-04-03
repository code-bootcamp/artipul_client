import * as S from './ReviewDetail.Styles'
import { Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import CreateCommentContainer from '../comment/CreateComment.Container'
import CommentListContainer from '../comment/commentList/CommentList.Container'
import ReviewImageContainer from '../readImage/ReadImage.Container'
import SelectWorkContainer from '../selectWork/SelectWork.container'

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
            <S.IconWrapper>
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

            <S.IconWrapper>
              <svg
                width="20"
                height="23"
                viewBox="0 0 20 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4611 0C18.4167 0 20 1.6675 20 3.72025C20 5.773 18.4178 7.43935 16.4611 7.43935C15.9602 7.439 15.4652 7.32756 15.0094 7.11252C14.5536 6.89748 14.1477 6.58385 13.8189 6.19275L6.83667 10.1488C6.99222 10.5674 7.07667 11.0227 7.07667 11.5C7.07667 12.1233 6.93222 12.7098 6.67333 13.2262L13.3489 17.5099C13.6478 16.9232 14.0954 16.4318 14.6437 16.0884C15.192 15.745 15.8203 15.5626 16.4611 15.5606C18.4167 15.5606 20 17.2281 20 19.2797C20 21.3325 18.4178 23 16.4611 23C14.5056 23 12.9233 21.3325 12.9233 19.2797L12.9267 19.1211L5.67111 14.4682C5.06005 14.9564 4.30972 15.2209 3.53778 15.2203C1.58333 15.2203 0 13.5528 0 11.5C0 9.44725 1.58222 7.77975 3.53889 7.77975C4.48556 7.77975 5.34556 8.17075 5.98 8.8067L13.0711 4.78975C12.9726 4.44243 12.9228 4.08224 12.9233 3.72025C12.9222 1.6675 14.5056 0 16.4611 0ZM16.4611 17.1649C15.3589 17.1649 14.4611 18.1102 14.4611 19.2809C14.4611 20.4505 15.3589 21.3958 16.4611 21.3958C17.5644 21.3958 18.4611 20.4504 18.4611 19.2797C18.4611 18.1102 17.5644 17.1649 16.4611 17.1649ZM3.53889 9.38515C2.43556 9.38515 1.53889 10.3305 1.53889 11.5C1.53889 12.6695 2.43556 13.616 3.53889 13.616C4.64111 13.616 5.53889 12.6695 5.53889 11.5C5.53889 10.3305 4.64111 9.384 3.53889 9.384V9.38515ZM16.4611 1.60425C15.3589 1.60425 14.4611 2.54955 14.4611 3.72025C14.4611 4.8898 15.3589 5.8351 16.4611 5.8351C17.5644 5.8351 18.4611 4.8898 18.4611 3.7191C18.4611 2.54955 17.5644 1.60425 16.4611 1.60425Z"
                  fill="black"
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
          <S.Tag>#회화</S.Tag>
          <S.Tag>#인물</S.Tag>
          <S.Tag>#소</S.Tag>
          <S.Tag>#정방향</S.Tag>
        </S.TagWrapper>
        <CreateCommentContainer />
        <CommentListContainer />
      </S.Right>
    </S.Wrapper>
    // <>
    //   <div>상세페이지</div>
    //   {/* <div>작성자의 닉네임: {props.data?.fetchBoard.user.nickname}</div> */}
    //   {/* <div>제목: {props.data?.fetchBoard.title}</div> */}
    //   <div>내용: {props.data?.fetchBoard.content}</div>
    //   <div style={{ width: '200px', height: '200px' }}>
    //     <img
    //       style={{ width: '100%', height: '100%' }}
    //       src={`${head}${props.data?.fetchBoard.thumbnail}`}
    //     />
    //   </div>
    //   <div>
    //     <button onClick={props.onClickEdit}>수정하러가기</button>
    //     <button onClick={props.onClickDelete}>삭제하기</button>
    //   </div>
    // </>
  )
}
