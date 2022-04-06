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
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `;(function () {
          var w = window
          if (w.ChannelIO) {
            return (window.console.error || window.console.log || function () {})('ChannelIO script included twice.')
          }
          var ch = function () {
            ch.c(arguments)
          }
          ch.q = []
          ch.c = function (args) {
            ch.q.push(args)
          }
          w.ChannelIO = ch
          function l() {
            if (w.ChannelIOInitialized) {
              return
            }
            w.ChannelIOInitialized = true
            var s = document.createElement('script')
            s.type = 'text/javascript'
            s.async = true
            s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js'
            s.charset = 'UTF-8'
            var x = document.getElementsByTagName('script')[0]
            x.parentNode.insertBefore(s, x)
          }
          if (document.readyState === 'complete') {
            l()
          } else if (window.attachEvent) {
            window.attachEvent('onload', l)
          } else {
            window.addEventListener('DOMContentLoaded', l, false)
            window.addEventListener('load', l, false)
          }
      })()
        ChannelIO('boot', {
          pluginKey: '9a7642e9-c9b1-4942-8e5a-b757a2626dff', //please fill with your plugin key
        })
      `,
          }}
        ></script>
      </Head>
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
