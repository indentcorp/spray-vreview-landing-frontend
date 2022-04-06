import type { NextPage } from 'next'
import { Header } from '@/components/Header'
import { Section } from '@/components/Section'
import { Intro } from '@/components/Intro'
import { Commerce } from '@/components/Commerce'
import { CustomerResponse } from '@/components/CustomerResponse'
import { Marketing } from '@/components/Marketing'
import { Price } from '@/components/Price'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { RelativeColors, SemanticColors } from '@/theme/Colors'
import { Preview } from '@/components/Preview'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <IntroWrapper>
        <Section style={{ backgroundColor: RelativeColors.purple500 }}>
          <Intro />
        </Section>
      </IntroWrapper>
      <Section>
        <Commerce />
      </Section>
      <PreviewWrapper>
        <Section style={{ backgroundColor: '#0D0D0E' }}>
          <Preview />
        </Section>
      </PreviewWrapper>
      <Section>
        <CustomerResponse />
      </Section>
      <Section>
        <Marketing />
      </Section>
      <Section>
        <Price />
      </Section>
      <Section style={{ backgroundColor: RelativeColors.purple700 }}>
        <Contact />
      </Section>
      <Footer />
    </>
  )
}

export default Home

const IntroWrapper = styled.div`
  .section-content {
    padding: 0px;
  }
`

const PreviewWrapper = styled.div`
  .section-content {
    padding: 0px;
    max-width: unset;
  }
`
