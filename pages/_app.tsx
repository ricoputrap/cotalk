import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import store from '../redux/store';
import useSocketClient from '../hooks/useSocketClient';

function MyApp({ Component, pageProps }: AppProps) {

  const socket = useSocketClient();
  const theme = extendTheme({
    fonts: {
      heading: `'Fira Code', monospace`,
      body: `'Fira Code', monospace`
    },
    colors: {
      brand: "#7E81FF",
      brandDark: "#5F62F4",
      dark: "#1E293B",
      mid: "#B8BFC6",
      background: "#F0F0F0",
      light: "#FFFFFF"
    }
  });

  return (
    <Provider store={store}>
      <ChakraProvider theme={ theme }>
        <Component {...pageProps} socket={socket} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
