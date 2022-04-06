import { SemanticColors } from '@/theme/Colors'
import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <Container>
      <Content>
        <Logo src="/assets/logo.svg" />
      </Content>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;
  height: 60px;
  justify-content: center;
  background-color: ${SemanticColors.background};
`

const Content = styled.div`
  padding: 19px 32px;
  margin: 0 auto;
  max-width: 1023px;
  @media (max-width: 1023px) {
    max-width: 375px;
  }
`

const Logo = styled.img``
