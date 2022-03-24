import AuctionArtsPageContainer from './auctionArtsPage/AuctionArtsPage.Container'
import BoughtArtsPageContainer from './boughtArtsPage/BoughtArtsPage.Container'
import LikePageContainer from './likePage/likePage.Container'
import MyBoardsContainer from './myBoards/MyBoards.Container'
import PointPageContainer from './pointPage/PointPage.Container'
import PostPageContainer from './postPage/PostPage.Container'
import * as UMP from './UserMyPage.Styles'
export default function UserMyPagePresenter(props) {
  return (
    <>
      <UMP.Wrapper>
        <div>
          <UMP.WrapperLeft>
            {props.data?.fetchUser.nickname} 님의 사진, 닉네임, 포인트 등
          </UMP.WrapperLeft>
          <button onClick={props.onClickCreateProfile}>수정하기</button>
          <div>
            <button onClick={props.onClickPoint}>포인트</button>
          </div>
          <div>
            <button onClick={props.onClickPost}>배송지 설정</button>
          </div>
          <div>
            <button onClick={props.onClickLike}> 내가 찜한 작품들</button>
          </div>
          <div>
            <button onClick={props.onClickBoards}>내가 작성한 게시글</button>
          </div>
          <div>
            <button onClick={props.onClickBought}>구매한 작품들</button>
          </div>
          <div>
            <button onClick={props.onClickAuction}>경매 참여중인 작품들</button>
          </div>
          {/* <div>{props.data?.}</div> */}
        </div>
        <div>
          {props.point && <PointPageContainer />}
          {props.post && <PostPageContainer />}
          {props.like && <LikePageContainer />}
          {props.boards && <MyBoardsContainer />}
          {props.bought && <BoughtArtsPageContainer />}
          {props.auction && <AuctionArtsPageContainer />}
        </div>
      </UMP.Wrapper>
    </>
  )
}
