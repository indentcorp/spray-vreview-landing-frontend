import React from 'react'
import styled from 'styled-components'

import { RelativeColors } from '@/theme/Colors'

export const Contact = () => {
  return (
    <Container>
      <Content>
        <Message>
          궁금한게 있다면 <br /> 언제든 물어보세요
        </Message>
        <SubMessage>
          문의하기를 통해 언제든 물어보세요.
          <br /> 브이리뷰 팀이 신속하게 답변드리겠습니다.
        </SubMessage>
      </Content>
    </Container>
  )
}

const Container = styled.div``

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Message = styled.p`
  position: block;
  padding-right: 96px;
  font-weight: 700;
  font-size: 2rem;
  line-height: 130%;
  color: ${RelativeColors.gray0};
  @media (max-width: 1023px) {
    padding-right: 0;
    padding-bottom: 24px;
  }
`

const SubMessage = styled.p`
  position: block;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 160%;
  color: ${RelativeColors.gray0};
  @media (max-width: 1023px) {
    font-size: 1rem;
  }
`
