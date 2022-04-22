import { RelativeColors } from '@/theme/Colors'
import { gtag } from '@/utils/gtmModule'
import React from 'react'
import styled from 'styled-components'

export const Intro = () => {
  const payload = {
    event: 'event_action',
    eventCategory: 'lead',
    eventAction: 'learn more',
    eventLabel: 'vreview service',
    dlContentName: '입점하기',
  }
  return (
    <Container>
      <Content>
        <Title>
          브이리뷰만의
          <br />
          글로벌 마케팅 솔루션
        </Title>
        <Logo src="/assets/logo.svg" />
        <a href="https://business.vreview.tv" target="_blank" rel="noopener noreferrer">
          <Button
            onClick={() => {
              gtag(payload)
            }}
          >
            <ButtonText>입점하기</ButtonText>
          </Button>
        </a>
      </Content>
      <SprayImage src="/assets/spray-iphone.png" />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  margin-top: 20px;
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

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 152px;
  height: 56px;
  background-color: ${RelativeColors.gray0};
  border-radius: 100px;
  margin-top: 60px;
  :hover {
    cursor: pointer;
    background-color: ${RelativeColors.purple300};
    p {
      color: ${RelativeColors.gray0};
    }
  }
  @media (max-width: 1023px) {
    margin-top: 43px;
  }
`

const ButtonText = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 23.22px;
  color: ${RelativeColors.purple500};
`
