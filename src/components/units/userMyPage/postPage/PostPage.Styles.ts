import styled from '@emotion/styled'
import DaumPostcode from 'react-daum-postcode'

export const DaumPostCode = styled(DaumPostcode)`
  border: 2px solid black;
`

export const DaumDiv = styled.div`
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0px 10px;
`
