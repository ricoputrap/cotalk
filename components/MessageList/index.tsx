import { Stack } from '@chakra-ui/react'
import React from 'react'
import { Message } from '../../types'
import MessageItem from '../MessageItem';

type Props = {
  messages: Message[];
}

const MessageList: React.FC<Props> = ({ messages }) => {
  return (
    <Stack flex={1} overflowY="scroll">
      { messages.map(msg => (
        <MessageItem
          key={ msg.id }
          message={ msg }
        />
      ))}
    </Stack>
  )
}

export default MessageList