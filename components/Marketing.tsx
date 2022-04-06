import { RelativeColors } from '@/theme/Colors'
import React from 'react'
import styled from 'styled-components'

export const Marketing = () => {
  return (
    <Container>
      <Main>글로벌 고객을 통해 <br />추가 매출의 기회를</Main>
      <Content>
        <Title>브이리뷰 고객사만을 위한 서비스</Title>
        <Description>최소 500% ROAS를 보장하는 <br/> 글로벌 마케팅 솔루션</Description>
        <ReviewCardImage src="/assets/spray-card.png" />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  padding: 0 32px;
`

const Main = styled.p`
  font-weight: 700;
  font-size: 3rem;
  line-height: 130%;
  color: ${RelativeColors.gray0};
`

const Content = styled.div`
  position: relative;
  width: 960px;
  height: 463px;
  background-color: ${RelativeColors.purple600};
  border-radius: 24px;
  margin-top: 40px;
`

const Title = styled.div`
  font-weight: 400;
  font-size: 1.125rem;
  color: ${RelativeColors.gray0};
  padding: 60px 0 0 60px;
`

const Description = styled.div`
  font-weight: 700;
  font-size: 2rem;
  line-height: 140%;
  color: ${RelativeColors.gray0};
  padding: 16px 0 0 60px;
`

const ReviewCardImage = styled.img`
  position: absolute;
  top: 30px;
  right: 87px;
  width: 373px;
  height: 532px;
  clip: rect(0, 373px, 433px, 0);
`