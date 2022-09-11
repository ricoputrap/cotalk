import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {

  const theme = extendTheme({
    fonts: {
      heading: `'Fira Code', monospace`,
      body: `'Fira Code', monospace`
    },
    colors: {
      brand: "#7E81FF",
      dark: "#1E293B",
      mid: "#B8BFC6",
      background: "#F0F0F0",
      light: "#FFFFFF"
    }
  });

  return (
    <ChakraProvider theme={ theme }>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
