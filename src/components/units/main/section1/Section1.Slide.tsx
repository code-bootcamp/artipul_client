import * as S from './Section1.Styles'
import { useSwiper } from 'swiper/react'
export default function Section1Slide(props) {
  const data = [
    {
      title: '성공한 우주비행사',
      subTitle: 'successful astronaut',
      content:
        '이병권 작가는 설치 미술로서 우수에 찬 성공한 감정을 공유하고 있는 고양이를 우주비행사라는 직업으로서 표현하여 큰 인상을 남겨주었다.'
    },
    {
      title: '슬픔 잠긴 도넛',
      subTitle: 'sorrowful doughnut',
      content:
        '강릉 최대의 리조트 건설이라는 도시를 덮자 사람들은 괴물로 변하고 마비된다. 한편, 조선을 사이에 둔 청과 명의 대립으로 가족을 24...'
    },
    {
      title: '아이슈타인',
      subTitle: 'Einstein pipe',
      content:
        '강릉 최대의 리조트 건설이라는 도시를 덮자 사람들은 괴물로 변하고 마비된다. 한편, 조선을 사이에 둔 청과 명의 대립으로 가족을 24...'
    }
  ]

  const swiper = useSwiper()

  return (
    <>
      <S.Section1Wrapper>
        <S.Section1TitleBox>
          <S.Section1Title>{data[Number(props.index)].title}</S.Section1Title>
          <S.Section1SubTitle>
            {data[Number(props.index)].subTitle}
          </S.Section1SubTitle>
          <S.Section1ContentBox>
            <S.Section1Content>
              {data[Number(props.index)].content}
            </S.Section1Content>
          </S.Section1ContentBox>
        </S.Section1TitleBox>
        <S.Section1NextButtonBox onClick={() => swiper.slideNext()}>
          <S.Section1NextButtonTitle>
            {props.index !== '2'
              ? data[Number(props.index) + 1].title
              : data[0].title}
          </S.Section1NextButtonTitle>
          <S.Section1NextButtonSubTitle>
            {props.index !== '2'
              ? data[Number(props.index) + 1].subTitle
              : data[0].subTitle}
          </S.Section1NextButtonSubTitle>
        </S.Section1NextButtonBox>
      </S.Section1Wrapper>
    </>
  )
}
