import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Message } from '../../types'
import MessageItem from '../MessageItem';

type Props = {
  messages: Message[];
}

const MessageList: React.FC<Props> = ({ messages }) => {
  return (
    <Flex direction="column">
      { messages.map(msg => (
        <MessageItem
          key={ msg.id }
          message={ msg }
        />
      ))}
    </Flex>
  )
}

export default MessageList