import React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
  style?: React.CSSProperties
}

export const Section: React.FC<Props> = ({ children, style }) => {
  return (
    <Container style={style}>
      <Content className="section-content">{children}</Content>
    </Container>
  )
}

const Container = styled.div``

const Content = styled.div`
  padding: 160px 0px;
  margin: 0 auto;
  max-width: 980px;
  @media (max-width: 980px) {
    max-width: 375px;
  }
`
