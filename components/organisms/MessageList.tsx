import { Stack } from '@chakra-ui/react'
import React from 'react'
import useDisplayMessages from '../../hooks/useDisplayMessages';
import MessageItem from '../atoms/MessageItem';

/**
 * This component is rendered TWICE everytime there is a new message
 * @todo review `useDisplayMessages()` later
 */
const MessageList: React.FC = () => {
  const { messages, activeRoomID } = useDisplayMessages();

  return (
    <Stack flex={1} overflowY="scroll">
      { messages.map(msg => (
        <MessageItem
          key={ msg.id }
          id={ msg.id }
          content={ msg.content }
          fromSender={ msg.fromSender }
          isRead={ msg.isRead }
          roomID={ activeRoomID }
        />
      ))}
    </Stack>
  )
}

export default MessageList