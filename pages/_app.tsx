import '../styles/globals.css'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import TagManager from 'react-gtm-module'
declare var process: {
  env: {
    NEXT_PUBLIC_GTM_ID: string
  }
}

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
