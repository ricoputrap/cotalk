import { Stack } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from '../../redux/hooks';
import { selectMessages } from '../../redux/slice';
import { Message } from '../../types'
import MessageItem from '../MessageItem';

const MessageList: React.FC = () => {
  const messages: Message[] = useAppSelector(selectMessages);

  return (
    <Stack flex={1} overflowY="scroll">
      { messages.map(msg => (
        <MessageItem
          key={ msg.id }
          content={ msg.content }
          fromSender={ msg.fromSender }
        />
      ))}
    </Stack>
  )
}

export default MessageList