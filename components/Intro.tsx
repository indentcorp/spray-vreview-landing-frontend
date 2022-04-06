import { RelativeColors } from '@/theme/Colors'
import React from 'react'
import styled from 'styled-components'

export const Intro = () => {
  return (
    <Container>
      <Title>
        브이리뷰만의
        <br />
        글로벌 마케팅 솔루션
      </Title>
      <Logo src="/assets/logo.svg" />
      <SprayImage src="/assets/spray-iphone.png" />
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  padding: 160px 0px;
`

const Title = styled.p`
  font-size: 3rem;
  font-weight: 700;
  line-height: 62.4px;
  color: ${RelativeColors.gray0};
`

const Logo = styled.img`
  width: 265px;
  height: 58px;
  margin-top: 32px;
`

const SprayImage = styled.img`
  position: absolute;
  bottom: -113px;
  right: 0;
  width: 570px;
  height: 576px;
`
