import { RelativeColors } from '@/theme/Colors'
import React from 'react'
import styled from 'styled-components'

export const Marketing = () => {
  return (
    <Container>
      <Main>
        글로벌 고객을 통해 <br />
        추가 매출의 기회를
      </Main>
      <Content>
        <Title>브이리뷰 고객사만을 위한 서비스</Title>
        <Description className="desktop">
          최소 500% ROAS를 보장하는 <br /> 글로벌 마케팅 솔루션
        </Description>
        <Description className="mobile">
          최소 500% <br /> ROAS를 보장하는 <br /> 글로벌 마케팅 솔루션
        </Description>
        <ReviewCardImage src="/assets/spray-card.png" />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
`

const Main = styled.p`
  font-weight: 700;
  font-size: 3rem;
  line-height: 130%;
  color: ${RelativeColors.gray0};
  @media (max-width: 1023px) {
    font-size: 2rem;
  }
`

const Content = styled.div`
  position: relative;
  width: 960px;
  height: 463px;
  background-color: ${RelativeColors.purple600};
  border-radius: 24px;
  margin-top: 40px;
  @media (max-width: 1023px) {
    width: 311px;
    height: 627px;
  }
`

const Title = styled.div`
  font-weight: 400;
  font-size: 1.125rem;
  color: ${RelativeColors.gray0};
  padding: 60px 0 0 60px;
  @media (max-width: 1023px) {
    padding: 30px 0 0 30px;
  }
`

const Description = styled.div`
  font-weight: 700;
  font-size: 2rem;
  line-height: 140%;
  color: ${RelativeColors.gray0};
  padding: 16px 0 0 60px;
  &.desktop {
    display: block;
  }
  &.mobile {
    display: none;
  }
  @media (max-width: 1023px) {
    padding: 16px 0 0 30px;
    font-size: 1.75rem;
    &.desktop {
      display: none;
    }
    &.mobile {
      display: block;
    }
  }
`

const ReviewCardImage = styled.img`
  position: absolute;
  top: 30px;
  right: 87px;
  width: 373px;
  height: 532px;
  clip: rect(0, 373px, 433px, 0);
  @media (max-width: 1023px) {
    top: 314px;
    right: 11px;
    width: 289px;
    height: 413px;
    clip: rect(0, 289px, 313px, 0);
  }
`
