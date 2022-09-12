import { Box, Flex } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react';
import ChatRooms from '../components/ChatRooms';
import ComposeBox from '../components/ComposeBox';
import MessageList from '../components/MessageList';
import useReceiveMessage from '../hooks/useReceiveMessage';
import styles from '../styles/Home.module.css'
import { ChatRoom, SocketClient } from '../types';

type Props = {
  socket: SocketClient;
}

const chatRooms: ChatRoom[] = [
  { id: "1", name: "Room 1", isActive: true },
  { id: "2", name: "Room 2", isActive: false },
  { id: "3", name: "Room 3", isActive: false },
  { id: "4", name: "Room 4", isActive: false },
  { id: "5", name: "Room 5", isActive: false },
  { id: "6", name: "Room 6", isActive: false },
]

const Home: NextPage<Props> = ({ socket }) => {
  useReceiveMessage(socket);

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
          <Box width="300px">
           <ChatRooms rooms={ chatRooms } />
          </Box>

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
