import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import { HeaderSimple } from '../components/header'
import { links } from '../components/link'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
