import * as React from 'react'
import styled from 'styled-components'

export const Footer = () => (
  <Container className="footer">
    <Content>
      <FooterLogo src="/assets/indent_logo.svg"/>
      <FooterText>
        (주)인덴트코퍼레이션 | 대표: 윤태석 | 연락처: <A href="mailto:contact@indentcorp.com">contact@indentcorp.com</A>{' '}
        | 사업자 등록번호: 677-87-01299
      </FooterText>
      <FooterText>주소: 서울특별시 성동구 뚝섬로17가길 48 507호 | 전화번호: 02-536-3474</FooterText>
      <FooterText>
        <StyledLink href="https://business.vreview.tv/policies/terms" target="_blank" rel="noopener noreferrer">
          서비스 이용약관
        </StyledLink>
        {' | '}
        <StyledLink href="https://business.vreview.tv/policies/privacy-policy" target="_blank" rel="noopener noreferrer">
          개인정보처리방침
        </StyledLink>
        {' | '}
        <StyledLink href="https://business.vreview.tv/policies/refund" target="_blank" rel="noopener noreferrer">
          취소 및 환불 정책
        </StyledLink>
      </FooterText>
      <FooterText>© Indent corp.</FooterText>
    </Content>
  </Container>
)

const Container = styled.div`
  background-color: #F8F8F8;
`

const Content = styled.div`
  padding: 19px 0px;
  margin: 0 auto;
  max-width: 980px;
  @media (max-width: 980px) {
    max-width: 375px;
  }
`

const FooterLogo = styled.img`
  width: 60px;
  margin-bottom: 10px;
`

const FooterText = styled.div`
  font-size: 13px;
  line-height: 22px;
  color: #666666;
`

const StyledLink = styled.a`
  font-size: 13px;
  line-height: 22px;
  color: #666666;
`

const A = styled.a`
  font-size: 13px;
  line-height: 22px;
  color: #666666;
`
