import theme from '@/components/ExtendedTheme'
import Layout from '@/components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import '../assets/global.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
