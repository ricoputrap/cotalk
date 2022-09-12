import { Box } from '@chakra-ui/react';
import React from 'react'

type Props = {
  content: string;
  fromSender: boolean;
}

const MessageItem: React.FC<Props> = ({ content, fromSender }) => {
  return (
    <Box
      width="fit-content"
      padding="12px"
      maxWidth="60%"
      background="light"
      borderRadius="12px"
      alignSelf={fromSender ? "end" : "start"}
    >
      { content }
    </Box>
  )
}

export default MessageItem