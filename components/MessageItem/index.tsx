import { Box } from '@chakra-ui/react';
import React from 'react'
import { Message } from '../../types'

type Props = {
  message: Message;
}

const MessageItem: React.FC<Props> = ({ message }) => {
  return (
    <Box
      width="fit-content"
      padding="12px"
      maxWidth="60%"
      background="light"
      borderRadius="12px"
    >
      { message.content }
    </Box>
  )
}

export default MessageItem