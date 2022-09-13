import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

type Props = {
  name: string;
}

const ChatRoomItemDetails: React.FC<Props> = ({ name }) => {
  return (
    <Box>
      <Heading size="sm" color="dark">{ name }</Heading>
    </Box>
  )
}

export default ChatRoomItemDetails