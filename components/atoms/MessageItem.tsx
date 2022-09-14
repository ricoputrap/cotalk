import { Box } from '@chakra-ui/react';
import React from 'react'
import useReadMessage from '../../hooks/useReadMessage';
import { Message } from '../../types';

interface Props extends Message {
  roomID: string;
}

const MessageItem: React.FC<Props> = ({ id, content, fromSender, isRead, roomID }) => {
  useReadMessage(roomID, id, isRead);

  return (
    <Box
      width="fit-content"
      padding="12px"
      maxWidth="60%"
      background={ fromSender ? "brand" : "light" }
      color={ fromSender ? "light" : "dark" }
      borderRadius="12px"
      alignSelf={ fromSender ? "end" : "start" }
    >
      { content }
    </Box>
  )
}

export default MessageItem