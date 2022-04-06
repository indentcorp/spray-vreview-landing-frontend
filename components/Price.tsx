import React from 'react'
import styled from 'styled-components'

import { RelativeColors } from '@/theme/Colors'

export const Price = () => {
  return (
    <Container>
      <Content>
        <GuideText>
          <Title>
            판매된 만큼만 <br /> 이용료 부과
          </Title>
          <Description>
            스프레이는 앱 내에서 발생하는 주문 건 대응과 관련한 실제 서비스 이용 요금만 청구하고 있습니다.
          </Description>
          <SubDescription>* 최대 20%까지 청구될 수 있습니다</SubDescription>
        </GuideText>
        <ServiceFeeImage src="/assets/service-fee.png" />
      </Content>
    </Container>
  )
}

const Container = styled.div``

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1023px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

const GuideText = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.p`
  font-weight: 700;
  font-size: 3rem;
  line-height: 130%;
  color: ${RelativeColors.gray0};
  @media (max-width: 1023px) {
    font-size: 2rem;
  }
`

const Description = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 160%;
  color: ${RelativeColors.gray400};
  padding-top: 40px;
  max-width: 350px;
  @media (max-width: 1023px) {
    padding-top: 24px;
  }
`

const SubDescription = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 140%;
  color: ${RelativeColors.gray500};
  padding-top: 12px;
  @media (max-width: 1023px) {
    padding-top: 24px;
  }
`

const ServiceFeeImage = styled.img`
  width: 403px;
  @media (max-width: 1023px) {
    width: 311px;
    padding-top: 80px;
  }
`
