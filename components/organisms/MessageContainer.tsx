import { Flex } from '@chakra-ui/react';
import React from 'react'
import { SocketClient } from '../../types'
import ComposeBox from '../ComposeBox';
import MessageList from './MessageList';

type Props = {
  socket: SocketClient;
}

const MessageContainer: React.FC<Props> = ({ socket }) => {
  return (
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
  )
}

export default MessageContainer