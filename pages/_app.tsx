import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import * as io from "socket.io-client";
import store from '../redux/store';
import { useEffect, useState } from 'react';

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

  const [socket, setSocket] = useState<any>();
  useEffect(() => {
    const SOCKET_HOST: string = process.env.NEXT_PUBLIC_SOCKET_SERVER || "";
    const clientSocket = io.connect(SOCKET_HOST, {
      transports: ["websocket"]
    });

    setSocket(clientSocket);
  }, []);

  return (
    <Provider store={store}>
      <ChakraProvider theme={ theme }>
        <Component {...pageProps} socket={socket} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
