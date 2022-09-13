import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react';
import ChatRooms from "../components/organisms/ChatRooms";
import ComposeBox from '../components/ComposeBox';
import MessageList from '../components/organisms/MessageList';
import useReceiveMessage from '../hooks/useReceiveMessage';
import useRooms from '../hooks/useRooms';
import styles from '../styles/Home.module.css'
import { SocketClient } from '../types';

type Props = {
  socket: SocketClient;
}

const Home: NextPage<Props> = ({ socket }) => {
  useReceiveMessage(socket);
  const { rooms } = useRooms(socket);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      <Head>
        <title>CoTalk - Let&apos;s talk with your coworker!</title>
        <meta
          name="description"
          content="A simple chat app that allows you to talk to your coworkers even if you are separated by continents."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={ styles.main }>
        <Box width="100%" height="100%" display="flex">
          {isLargerThan768 && (
            <Box width="300px" >
              <ChatRooms rooms={ rooms } />
            </Box>
          )}

          <Flex
            direction="column"
            backgroundColor="background"
            height="100%"
            padding="20px 20px 4px"
            flex={1}
          >
            <MessageList />

            <ComposeBox socket={socket} />
          </Flex>
        </Box>

      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default Home
