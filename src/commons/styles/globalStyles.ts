import { css } from '@emotion/react'
import { BreakPoints } from './media'

export const globalStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Pretendard-Regular';
    font-size: 16px;
    @media ${BreakPoints.mobile} {
      font-size: 3.25px;
    }
  }

  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gotham';
    src: url('http://fonts.cdnfonts.com/css/gotham');
    font-weight: 400;
    font-style: normal;
  }

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    left: -50rem;
  }

  .swiper-pagination-bullet {
    width: var(
      --swiper-pagination-bullet-width,
      var(--swiper-pagination-bullet-size, 35px)
    );
    height: var(
      --swiper-pagination-bullet-height,
      var(--swiper-pagination-bullet-size, 6px)
    );
    border-radius: 15%;
  }
  :root {
    --swiper-theme-color: #f64612;
  }
`
