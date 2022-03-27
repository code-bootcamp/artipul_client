import { css } from '@emotion/react'

export const globalStyles = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* font-family: "Cafe24SsurroundAir"; */
    font-family: 'Pretendard-Regular';
    font-size: 16px;
  }

  /* @font-face {
    font-family: 'Cafe24SsurroundAir';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24SsurroundAir.woff') format('woff');
    font-weight: normal;
    font-style: normal;
} */

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
`
