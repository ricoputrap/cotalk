import { Box, useMediaQuery } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react';
import ChatRooms from "../components/organisms/ChatRooms";
import useReceiveMessage from '../hooks/useReceiveMessage';
import useRooms from '../hooks/useRooms';
import styles from '../styles/Home.module.css'
import MessageContainer from '../components/organisms/MessageContainer';
import MessageHeader from '../components/molecules/MessageHeader';
import ChatRoomsHeader from '../components/molecules/ChatRoomsHeader';
import FormNewRoom from '../components/molecules/FormNewRoom';
import useCreateNewRoom from '../hooks/useCreateNewRoom';

const Home: NextPage = () => {

  useReceiveMessage();
  const { rooms } = useRooms();
  const { isCreatingNewRoom } = useCreateNewRoom();
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
            <Box
              width="300px"
              borderRight="1px solid var(--chakra-colors-mid)"
              display="flex"
              flexDir="column"
            >
              <ChatRoomsHeader />
              
              {isCreatingNewRoom && (
                <Box borderBottom="1px solid var(--chakra-colors-mid)">
                  <FormNewRoom />
                </Box>
              )}

              <ChatRooms rooms={ rooms } />
            </Box>
          )}

          <Box flex={1}>
            <MessageHeader />
            <MessageContainer />
          </Box>
        </Box>

      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export default Home
