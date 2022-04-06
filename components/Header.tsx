import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <Container>
      <Content>
        <Text>Header</Text>
      </Content>
    </Container>
  )
}

const Container = styled.div``

const Content = styled.div`
  padding: 19px 0px;
  margin: 0 auto;
  max-width: 980px;
  @media (max-width: 980px) {
    max-width: 375px;
  }
`

const Text = styled.p``
