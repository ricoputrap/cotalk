import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

type Props = {
  name: string;
  isActive: boolean;
}

const ChatRoomItemDetails: React.FC<Props> = ({ name, isActive }) => {
  return (
    <Box>
      <Heading
        size="sm"
        color={ isActive ? "light" : "dark" }
      >
        { name }
      </Heading>
    </Box>
  )
}

export default ChatRoomItemDetails