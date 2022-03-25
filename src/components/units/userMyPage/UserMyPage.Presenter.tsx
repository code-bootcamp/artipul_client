import AuctioningPageContainer from '../artistMyPage/auctioningPage/AuctioningPage.Container'
import DonePageContainer from '../artistMyPage/donePage/DonePage.Container'
import IntroducePageContainer from '../artistMyPage/introducePage/IntroducePage.Container'
import AuctionArtsPageContainer from './auctionArtsPage/AuctionArtsPage.Container'
import BoughtArtsPageContainer from './boughtArtsPage/BoughtArtsPage.Container'
import LikePageContainer from './likePage/likePage.Container'
import MyBoardsContainer from './myBoards/MyBoards.Container'
import PointPageContainer from './pointPage/PointPage.Container'
import PostPageContainer from './postPage/PostPage.Container'

const head = `https://storage.googleapis.com`

import * as UMP from './UserMyPage.Styles'
export default function UserMyPagePresenter(props) {
  console.log(props.url)
  console.log(props.data)
  return (
    <>
      {props.data?.fetchProfile.user.is_artist ? (
        <UMP.Wrapper>
          <div>
            {' '}
            <UMP.WrapperLeft>
              <div>
                <img
                  style={{ width: '100px', height: '100px' }}
                  src={
                    props.url
                      ? `${head}${props.url}`
                      : `${head}${props.data?.fetchProfile.url}`
                  }
                />
                <input
                  type="file"
                  ref={props.fileRef}
                  style={{ display: 'none' }}
                  onChange={props.onChangeImageUrl}
                />
              </div>
              {props.clickImage ? (
                <button onClick={props.onClickChangeProfileImage}>
                  이미지 수정완료
                </button>
              ) : (
                <button onClick={props.onClickEdit}>이미지 수정하기</button>
              )}

              <div>{props.data?.fetchProfile.user.name} 님</div>
              <div>{props.data?.fetchProfile.user.nickname} </div>
              <div>{props.data?.fetchProfile.user.point} 원</div>
            </UMP.WrapperLeft>
            <div>
              <button onClick={props.onClickIntroduce}> 작가 소개 </button>
            </div>
            <div>
              <button onClick={props.onClickSale}> 판매중인 작품들 </button>
            </div>
            <div>
              <button onClick={props.onClickDone}> 거래 완료된 작품들 </button>
            </div>
          </div>
          <div>
            {props.introduce && <IntroducePageContainer />}
            {props.sale && <AuctioningPageContainer />}
            {props.done && <DonePageContainer />}
          </div>
        </UMP.Wrapper>
      ) : (
        <UMP.Wrapper>
          <div>
            <UMP.WrapperLeft>
              <div>
                <img
                  style={{ width: '100px', height: '100px' }}
                  src={
                    props.url
                      ? `${head}${props.url}`
                      : `${head}${props.data?.fetchProfile.url}`
                  }
                />
                <input
                  type="file"
                  ref={props.fileRef}
                  style={{ display: 'none' }}
                  onChange={props.onChangeImageUrl}
                />
              </div>
              {props.clickImage ? (
                <button onClick={props.onClickChangeProfileImage}>
                  이미지 수정완료
                </button>
              ) : (
                <button onClick={props.onClickEdit}>이미지 수정하기</button>
              )}
              <div>{props.data?.fetchProfile.user.name} 님</div>
              <div>{props.data?.fetchProfile.user.nickname} </div>
              <div>{props.data?.fetchProfile.user.point} 원</div>
            </UMP.WrapperLeft>
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
              <button onClick={props.onClickAuction}>
                경매 참여중인 작품들
              </button>
            </div>
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
      )}
    </>
  )
}
