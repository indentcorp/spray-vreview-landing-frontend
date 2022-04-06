import { RelativeColors } from '@/theme/Colors'
import React from 'react'
import styled from 'styled-components'

export const CustomerResponse = () => {
  return (
    <Container>
      <Title>
        입점만으로 <br /> 글로벌 고객 대응 준비 끝
      </Title>
      <Message className="desktop">
        글로벌 진출 준비가 되어있지 않더라도 스프레이라면 괜찮아요.
        <br />
        브이리뷰 영상 후기들로 전세계 고객들을 모으고 대응까지 알아서 척척!
      </Message>
      <Message className="mobile">
        글로벌 진출 준비가 되어있지 않더라도 스프레이라면 괜찮아요. 브이리뷰 영상 후기들로 전세계 고객들을 모으고
        대응까지 알아서 척척!
      </Message>
      <Content style={{ paddingTop: 80 }} className="desktop">
        <Box>
          <Step src="/assets/spray.png" />
        </Box>
        <Chevron src="/assets/ic-chevron.svg" />
        <Box>
          <Step src="/assets/shop.png" />
        </Box>
        <Chevron src="/assets/ic-chevron.svg" />
        <Box>
          <Step src="/assets/shipping.png" />
        </Box>
      </Content>
      <Content style={{ paddingTop: 40 }} className="desktop">
        <Description>브이리뷰를 통해 생산된 영상 후기가 스프레이의 전세계 사용자들에게 노출됩니다.</Description>
        <Description>
          신뢰할 수 있는 실 구매자들의 영상 후기를 통해 앱 내에서 쉽고 빠르게 구매가 일어납니다.
        </Description>
        <Description>발생한 모든 주문은 자동으로 연동되고, 해외 주문 건은 스프레이가 배송합니다.</Description>
      </Content>
      <Content style={{ paddingTop: 80 }} className="mobile">
        <Box>
          <Step src="/assets/spray.png" />
        </Box>
        <Description>브이리뷰를 통해 생산된 영상 후기가 스프레이의 전세계 사용자들에게 노출됩니다.</Description>
        <Chevron src="/assets/ic-chevron.svg" />
        <Box>
          <Step src="/assets/shop.png" />
        </Box>
        <Description>
          신뢰할 수 있는 실 구매자들의 영상 후기를 통해 앱 내에서 쉽고 빠르게 구매가 일어납니다.
        </Description>
        <Chevron src="/assets/ic-chevron.svg" />
        <Box>
          <Step src="/assets/shipping.png" />
        </Box>
        <Description>발생한 모든 주문은 자동으로 연동되고, 해외 주문 건은 스프레이가 배송합니다.</Description>
      </Content>
    </Container>
  )
}

const Chevron = styled.img`
  @media (max-width: 1023px) {
    transform: rotate(90deg);
  }
`

const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${RelativeColors.gray400};
  max-width: 240px;
  padding-top: 40px;
  @media (max-width: 1023px) {
    max-width: none;
    padding: 40px 3px 70px 3px;
    text-align: center;
  }
`

const Container = styled.div`
  position: relative;
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

const Message = styled.p`
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 160%;
  color: ${RelativeColors.gray400};
  padding-top: 40px;
  &.desktop {
    display: block;
  }
  &.mobile {
    display: none;
  }
  @media (max-width: 1023px) {
    &.desktop {
      display: none;
    }
    &.mobile {
      display: block;
    }
    font-size: 1rem;
  }
`

const Content = styled.div`
  &.desktop {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &.mobile {
    display: none;
  }
  @media (max-width: 1023px) {
    &.desktop {
      display: none;
    }
    &.mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

const Box = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  border-radius: 40px;
  background-color: ${RelativeColors.purple700};
  @media (max-width: 1023px) {
    margin-top: 40px;
  }
`

const Step = styled.img`
  position: absolute;
  top: 60px;
  left: 60px;
  width: 120px;
  height: 120px;
`
