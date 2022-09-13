import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import RedCircle from '../atoms/RedCircle';

type Props = {
  name: string;
  isActive: boolean;
}

const ChatRoomItemDetails: React.FC<Props> = ({ name, isActive }) => {
  return (
    <Box
      display="flex"
      flex={1}
      alignItems="center"
      justifyContent="space-between"
      height="100%"
    >
      <Box>
        <Heading
          size="sm"
          color={ isActive ? "light" : "dark" }
        >
          { name }
        </Heading>
      </Box>

      <Box>
        <RedCircle>12</RedCircle>
      </Box>

    </Box>
  )
}

export default ChatRoomItemDetails