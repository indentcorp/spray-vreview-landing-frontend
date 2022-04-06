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

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Section style={{ backgroundColor: RelativeColors.purple500 }}>
        <Intro />
      </Section>
      {/*TODO: backgroundColor 수정 */}
      <Section style={{ backgroundColor: SemanticColors.background }}>
        <Commerce />
      </Section>
      {/*TODO: backgroundColor 수정 */}
      <Section style={{ backgroundColor: SemanticColors.background }}>
        <Preview />
      </Section>
      {/*TODO: backgroundColor 수정 */}
      <Section style={{ backgroundColor: SemanticColors.background }}>
        <CustomerResponse />
      </Section>
      {/*TODO: backgroundColor 수정 */}
      <Section style={{ backgroundColor: SemanticColors.background }}>
        <Marketing />
      </Section>
      {/*TODO: backgroundColor 수정 */}
      <Section style={{ backgroundColor: SemanticColors.background }}>
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
