import { RelativeColors } from '@/theme/Colors'
import React from 'react'
import styled from 'styled-components'

export const Commerce = () => {
  return (
    <Container>
      <GlobalIcon src="/assets/ic-global.svg" />
      <Title>글로벌 발견형 커머스</Title>
      <TextWrapper>
        <Text className="desktop">
          스프레이는 브이리뷰 영상 후기를 쉽고 빠르게 소비하여
          <br />
          상품을 발견하고 손쉽게 구매할 수 있는 글로벌 영상후기 커머스 플랫폼입니다.
        </Text>
        <Text className="mobile">
          스프레이는 브이리뷰 영상 후기를 쉽고 빠르게 소비하여 상품을 발견하고 손쉽게 구매할 수 있는 글로벌 영상후기
          커머스 플랫폼입니다.
        </Text>
      </TextWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.p`
  font-size: 3rem;
  font-weight: 700;
  line-height: 62.4px;
  color: ${RelativeColors.gray0};
  text-align: center;
  margin-top: 30px;
  @media (max-width: 1023px) {
    font-size: 2rem;
    line-height: 41.6px;
    margin-top: 40px;
  }
`

const TextWrapper = styled.div`
  margin-top: 40px;
  @media (max-width: 1023px) {
    margin-top: 24px;
  }
`

const Text = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 28.8px;
  color: ${RelativeColors.gray400};
  text-align: center;
  &.desktop {
    display: block;
  }
  &.mobile {
    display: none;
  }
  @media (max-width: 1023px) {
    font-size: 1rem;
    line-height: 25.6px;
    &.desktop {
      display: none;
    }
    &.mobile {
      display: block;
    }
  }
`

const GlobalIcon = styled.img`
  width: 60px;
  height: 60px;
`
