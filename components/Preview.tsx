import React from 'react'
import styled from 'styled-components'

export const Preview = () => {
  return (
    <Container>
      <Background />
    </Container>
  )
}

const Container = styled.div`
  @media (max-width: 1023px) {
    padding: 49px 0px;
  }
`

const Background = styled.div`
  background-image: url('/assets/spray-preview.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
  max-width: 1257px;
  margin: 0 auto;
  @media (max-width: 1023px) {
    background-image: url('/assets/spray-preview-mobile.png');
    max-width: 249px;
    height: 503px;
  }
`
