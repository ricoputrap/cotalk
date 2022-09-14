import { Flex } from '@chakra-ui/react';
import React from 'react'
import { SocketClient } from '../../types'
import ComposeBox from '../molecules/ComposeBox';
import MessageList from './MessageList';

type Props = {
  socket: SocketClient;
}

const MessageContainer: React.FC<Props> = ({ socket }) => {
  return (
    <Flex
      direction="column"
      backgroundColor="background"
      height="calc(100% - 80px)"
      padding="20px 20px 4px"
    >
      <MessageList />

      <ComposeBox socket={socket} />
    </Flex>
  )
}

export default MessageContainer