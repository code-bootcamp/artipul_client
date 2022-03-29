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
import { IMypageProps } from './UserMyPage.Types'
export default function UserMyPagePresenter(props: IMypageProps) {
  return (
    <>
      {props.data?.fetchProfile.user.is_artist ? (
        <MP.Wrapper>
          <div>
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
                개인
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
          </div>
          <div style={{ width: '100%' }}>
            {props.introduce && <IntroducePageContainer />}
            {props.sale && <AuctioningPageContainer />}
            {props.done && <DonePageContainer />}
          </div>
        </MP.Wrapper>
      ) : (
        <MP.Wrapper>
          <div>
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
          </div>
          <div style={{ width: '100%' }}>
            {props.point && <PointPageContainer />}
            {props.post && <PostPageContainer />}
            {props.like && <LikePageContainer />}
            {props.boards && <MyBoardsContainer />}
            {props.bought && <BoughtArtsPageContainer />}
            {props.auction && <AuctionArtsPageContainer />}
          </div>
        </MP.Wrapper>
      )}
    </>
  )
}
