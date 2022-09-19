import { Flex } from '@chakra-ui/react';
import React from 'react'
import ComposeBox from '../molecules/ComposeBox';
import MessageList from './MessageList';

const MessageContainer: React.FC = () => {
  return (
    <Flex
      direction="column"
      backgroundColor="background"
      height="calc(100% - 80px)"
      padding="20px 20px 4px"
    >
      <MessageList />

      <ComposeBox />
    </Flex>
  )
}

export default MessageContainer