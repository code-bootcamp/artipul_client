import MyPageLeft from '../../commons/div/myPageLeft'
import AuctioningPageContainer from '../artistMyPage/auctioningPage/AuctioningPage.Container'
import DonePageContainer from '../artistMyPage/donePage/DonePage.Container'
import IntroducePageContainer from '../artistMyPage/introducePage/IntroducePage.Container'
import AuctionArtsPageContainer from './auctionArtsPage/AuctionArtsPage.Container'
import BoughtArtsPageContainer from './boughtArtsPage/BoughtArtsPage.Container'
import LikePageContainer from './likePage/likePage.Container'
import MyBoardsContainer from './myBoards/MyBoards.Container'
import PointPageContainer from './pointPage/PointPage.Container'
import PostPageContainer from './postPage/PostPage.Container'
import * as MP from './UserMyPage.Styles'
import { Menu, Dropdown } from 'antd'
import { IMypageProps } from './UserMyPage.Types'
export default function UserMyPagePresenter(props: IMypageProps) {
  const menu = (
    <Menu>
      <Menu.Item key={1} onClick={props.onClickPoint}>
        포인트 충전 및 사용내역
      </Menu.Item>
    </Menu>
  )
  const menu2 = (
    <Menu>
      <Menu.Item key={2} onClick={props.onClickAuction}>
        참여중인 경매
      </Menu.Item>
      <Menu.Item key={3} onClick={props.onClickLike}>
        찜한 작품들
      </Menu.Item>
    </Menu>
  )
  const menu3 = (
    <Menu>
      <Menu.Item key={4} onClick={props.onClickPost}>
        배송지 설정
      </Menu.Item>
      <Menu.Item key={5} onClick={props.onClickBoards}>
        작성한 리뷰
      </Menu.Item>
      <Menu.Item key={6} onClick={props.onClickBought}>
        구매한 작품들
      </Menu.Item>
    </Menu>
  )
  const menu4 = (
    <Menu>
      <Menu.Item key={7} onClick={props.onClickIntroduce}>
        작가 소개
      </Menu.Item>
    </Menu>
  )
  const menu5 = (
    <Menu>
      <Menu.Item key={8} onClick={props.onClickSale}>
        경매중인 작품
      </Menu.Item>
      <Menu.Item key={9} onClick={props.onClickDone}>
        거래 완료된 작품
      </Menu.Item>
    </Menu>
  )
  return (
    <>
      {props.data?.fetchProfile.user.is_artist ? (
        <MP.Wrapper>
          <MP.Web>
            <MyPageLeft
              data={props.data}
              url={props.url}
              fileRef={props.fileRef}
              onChangeImageUrl={props.onChangeImageUrl}
              clickImage={props.clickImage}
              onClickChangeProfileImage={props.onClickChangeProfileImage}
              onClickEdit={props.onClickEdit}
            />
            <MP.WrapperLeftBodyAr>
              <MP.LeftBodyMenu
                style={{
                  color: `${props.introduce ? 'orange' : 'black'}`
                }}
                onClick={props.onClickIntroduce}
              >
                개인
              </MP.LeftBodyMenu>
              <MP.ClickMenus
                style={{ color: `${props.introduce ? '#615e5e' : '#aaaaaa'}` }}
                onClick={props.onClickIntroduce}
              >
                작가 소개
              </MP.ClickMenus>
              <MP.LeftBodyMenu
                style={{
                  color: `${props.sale || props.done ? 'orange' : 'black'}`
                }}
                onClick={props.onClickSale}
              >
                작품
              </MP.LeftBodyMenu>
              <MP.ClickMenus
                style={{ color: `${props.sale ? '#615e5e' : '#aaaaaa'}` }}
                onClick={props.onClickSale}
              >
                경매중인 작품
              </MP.ClickMenus>
              <MP.ClickMenus
                style={{ color: `${props.done ? '#615e5e' : '#aaaaaa'}` }}
                onClick={props.onClickDone}
              >
                거래 완료된 작품
              </MP.ClickMenus>
              <MP.ReviewBox>
                <MP.ReviewButton onClick={props.onClickCreateArt}>
                  작품 등록하기
                </MP.ReviewButton>
              </MP.ReviewBox>
            </MP.WrapperLeftBodyAr>
          </MP.Web>
          <MP.RightBody style={{ width: '100%' }}>
            <MP.SmallBar>
              <Dropdown overlay={menu4}>
                <MP.DropdownA
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  개인
                </MP.DropdownA>
              </Dropdown>
              <Dropdown overlay={menu5}>
                <MP.DropdownA
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  작품
                </MP.DropdownA>
              </Dropdown>
            </MP.SmallBar>
            {props.introduce && <IntroducePageContainer />}
            {props.sale && <AuctioningPageContainer />}
            {props.done && <DonePageContainer />}
          </MP.RightBody>
        </MP.Wrapper>
      ) : (
        <MP.Wrapper>
          <MP.Web>
            <MyPageLeft
              data={props.data}
              url={props.url}
              fileRef={props.fileRef}
              onChangeImageUrl={props.onChangeImageUrl}
              clickImage={props.clickImage}
              onClickChangeProfileImage={props.onClickChangeProfileImage}
              onClickEdit={props.onClickEdit}
            />
            <MP.WrapperLeftBody>
              <MP.LeftBodyMenu
                style={{ color: `${props.point ? 'orange' : 'black'}` }}
                onClick={props.onClickPoint}
              >
                포인트
              </MP.LeftBodyMenu>
              <MP.ClickMenus
                style={{ color: `${props.point ? '#615e5e' : '#aaaaaa'}` }}
                onClick={props.onClickPoint}
              >
                포인트 충전 및 사용내역
              </MP.ClickMenus>
              <MP.LeftBodyMenu
                style={{
                  color: `${props.like || props.auction ? 'orange' : 'black'}`
                }}
                onClick={props.onClickAuction}
              >
                경매
              </MP.LeftBodyMenu>
              <MP.ClickMenus
                style={{ color: `${props.auction ? '#615e5e' : '#aaaaaa'}` }}
                onClick={props.onClickAuction}
              >
                참여중인 경매
              </MP.ClickMenus>
              <MP.ClickMenus
                style={{ color: `${props.like ? '#615e5e' : '#aaaaaa'}` }}
                onClick={props.onClickLike}
              >
                찜한 작품들
              </MP.ClickMenus>

              <MP.LeftBodyMenu
                style={{
                  color: `${
                    props.boards || props.bought || props.post
                      ? 'orange'
                      : 'black'
                  }`
                }}
                onClick={props.onClickPoint}
              >
                개인
              </MP.LeftBodyMenu>
              <MP.ClickMenus
                style={{ color: `${props.post ? '#615e5e' : '#aaaaaa'}` }}
                onClick={props.onClickPost}
              >
                배송지 설정
              </MP.ClickMenus>
              <MP.ClickMenus
                onClick={props.onClickBoards}
                style={{ color: `${props.boards ? '#615e5e' : '#aaaaaa'}` }}
              >
                작성한 리뷰
              </MP.ClickMenus>
              <MP.ClickMenus
                onClick={props.onClickBought}
                style={{ color: `${props.bought ? '#615e5e' : '#aaaaaa'}` }}
              >
                구매한 작품들
              </MP.ClickMenus>
              <MP.ReviewBox>
                <MP.ReviewButton onClick={props.onClickBought}>
                  리뷰 작성하기
                </MP.ReviewButton>
              </MP.ReviewBox>
            </MP.WrapperLeftBody>
          </MP.Web>
          <MP.RightBody style={{ width: '100%' }}>
            <MP.SmallBar>
              <Dropdown overlay={menu}>
                <MP.DropdownA
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  포인트
                </MP.DropdownA>
              </Dropdown>
              <Dropdown overlay={menu2}>
                <MP.DropdownA
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  경매
                </MP.DropdownA>
              </Dropdown>
              <Dropdown overlay={menu3}>
                <MP.DropdownA
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  개인
                </MP.DropdownA>
              </Dropdown>
            </MP.SmallBar>
            {props.point && <PointPageContainer />}
            {props.post && <PostPageContainer />}
            {props.like && <LikePageContainer />}
            {props.boards && <MyBoardsContainer />}
            {props.bought && <BoughtArtsPageContainer />}
            {props.auction && <AuctionArtsPageContainer />}
          </MP.RightBody>
        </MP.Wrapper>
      )}
    </>
  )
}
