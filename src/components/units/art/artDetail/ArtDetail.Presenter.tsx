import * as S from './ArtDetail.Styles'
import ArttDetailModal from './ArtDetailModal/ArtDetailModal'
import { FaRegHeart, FaHeart, FaRegUser } from 'react-icons/fa'

export default function ArtDetailPresenter(props) {
  return (
    <>
      <S.ArtDetailWrapper>
        <S.ArtDetailTop>
          <S.ArtDetaiToplLeft>
            <S.ArtDetailImageBox>
              <S.ArtDetailImage image={props.data?.thumbnail} />
            </S.ArtDetailImageBox>
          </S.ArtDetaiToplLeft>
          <S.ArtDetailTopRight>
            <S.ArtDetailTopButtonBox>
              <S.ArtWorkArtistButton onClick={props.onClickArtist}>
                <FaRegUser />
              </S.ArtWorkArtistButton>
              {!props.is_artist && props.is_artist !== undefined && (
                <S.ArtWorkLikeButton
                  onClick={props.onClickLike}
                  value={props.likeDate?.includes(props.id)}
                  id={props.id}
                >
                  {props.likeDate?.includes(props.el.id) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
                </S.ArtWorkLikeButton>
              )}
            </S.ArtDetailTopButtonBox>
            <S.ArtDetailTag>{props.data?.tag1}</S.ArtDetailTag>
            <S.ArtDetailTitle>{props.data?.title}</S.ArtDetailTitle>
            <S.ArtDetailSubBox>
              <S.ArtDetailTopSubBox>
                <S.ArtDetailSubTitle>작가</S.ArtDetailSubTitle>
                <S.ArtDetailArtist>
                  {props.data?.user.nickname}
                </S.ArtDetailArtist>
              </S.ArtDetailTopSubBox>
            </S.ArtDetailSubBox>
            <S.ArtDetailPriceTimeBox>
              <S.ArtDetailPriceBox>
                <S.ArtDetailStartPriceBox>
                  <S.ArtDetailPriceTitle>경매시작가</S.ArtDetailPriceTitle>
                  <S.ArtDetailStartPrice>
                    {props.data?.start_price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </S.ArtDetailStartPrice>
                </S.ArtDetailStartPriceBox>

                <S.ArtDetailInstanceBidBox>
                  <S.ArtDetailPriceTitle>즉시구매가</S.ArtDetailPriceTitle>
                  <S.ArtDetailPriceInstanceBid>
                    {props.data?.instant_bid
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    원
                  </S.ArtDetailPriceInstanceBid>
                </S.ArtDetailInstanceBidBox>
              </S.ArtDetailPriceBox>
              <S.ArtDetailTimeBox>
                <S.ArtDetailTimeTitle>경매마감일</S.ArtDetailTimeTitle>
                <S.ArtDetailTime>
                  {props.data?.deadline.slice(0, 16)}
                </S.ArtDetailTime>
              </S.ArtDetailTimeBox>
            </S.ArtDetailPriceTimeBox>
            <S.ArtDetailNowPriceBox>
              <S.ArtDetailNowPriceTitle>현재입찰가</S.ArtDetailNowPriceTitle>
              <S.ArtDetailNowPrice>
                {/* {props.data?.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                원 */}
                {props.price}
              </S.ArtDetailNowPrice>
            </S.ArtDetailNowPriceBox>
            <S.ArtDetailButtonBox>
              <S.ArtDetailAuctionButton onClick={props.onClickAcution}>
                입찰하기
              </S.ArtDetailAuctionButton>
              <S.ArtDetailBuyButton onClick={props.onClickInstanceBid}>
                즉시 구매하기
              </S.ArtDetailBuyButton>
            </S.ArtDetailButtonBox>
          </S.ArtDetailTopRight>
        </S.ArtDetailTop>
        <S.ArtDetailBottom>
          <S.ArtDetailDescriptionBox>
            <S.ArtDetailDescriptionTitle>
              {props.data?.title}
            </S.ArtDetailDescriptionTitle>
            <S.ArtDetailDescription>
              {props.data?.description}
            </S.ArtDetailDescription>
            <S.ArtDetailDescriptionImageBox>
              <S.ArtDetailDescriptionImage image={props.data?.thumbnail} />
            </S.ArtDetailDescriptionImageBox>
          </S.ArtDetailDescriptionBox>
        </S.ArtDetailBottom>
        {/* <input
          ref={props.inputRef}
          type="text"
          value={props.msg}
          placeholder={props.connected ? 'Type a message...' : 'Connecting...'}
          disabled={!props.connected}
          onChange={(e) => {
            props.setMsg(e.target.value)
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              props.sendMessage()
            }
          }}
        />
        <button onClick={props.sendMessage}>test</button>
        {props.chat?.length ? (
          props.chat.map((chat, i) => (
            <div key={'msg_' + i}>
              <span>{chat.user === props.user ? 'Me' : chat.user}</span>:{' '}
              {chat.msg}
            </div>
          ))
        ) : (
          <div>No chat messages</div>
        )} */}
      </S.ArtDetailWrapper>
      <S.ArtDetailModal
        visible={props.isModalVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
      >
        <ArttDetailModal
          userPoint={props.userPoint}
          price={props.data?.price}
          onChangeBuyPrice={props.onChangeBuyPrice}
        />
      </S.ArtDetailModal>
    </>
  )
}
