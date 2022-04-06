import { RelativeColors } from '@/theme/Colors'
import React from 'react'
import styled from 'styled-components'

export const Intro = () => {
  return (
    <Container>
      <Content>
        <Title>
          브이리뷰만의
          <br />
          글로벌 마케팅 솔루션
        </Title>
        <Logo src="/assets/logo.svg" />
      </Content>
      <SprayImage src="/assets/spray-iphone.png" />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 590px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Content = styled.div`
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px auto;
  }
`

const Title = styled.p`
  font-size: 3rem;
  font-weight: 700;
  line-height: 62.4px;
  color: ${RelativeColors.gray0};
  @media (max-width: 1023px) {
    font-size: 2rem;
    font-weight: 700;
    line-height: 41.6px;
    text-align: center;
  }
`

const Logo = styled.img`
  width: 265px;
  height: 58px;
  margin-top: 32px;
  @media (max-width: 1023px) {
    width: 224px;
    height: 49px;
    margin-top: 18px;
  }
`

const SprayImage = styled.img`
  position: absolute;
  bottom: -113px;
  right: 0px;
  width: 570px;
  height: 576px;
  @media (max-width: 1023px) {
    width: 311px;
    height: 314px;
    bottom: -124px;
    left: 0px;
    margin: 0px auto;
  }
`
