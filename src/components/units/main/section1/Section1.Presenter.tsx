import * as S from './Section1.Styles'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import Section1Slide from './Section1.Slide'

export default function Section1Presenter() {
  return (
    <>
      <Swiper loop={true} className="mySwiper">
        <SwiperSlide>
          <Section1Slide index="0" />
        </SwiperSlide>
        <SwiperSlide>
          <Section1Slide index="1" />
        </SwiperSlide>
        <SwiperSlide>
          <Section1Slide index="2" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
