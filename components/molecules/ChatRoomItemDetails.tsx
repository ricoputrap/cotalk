import { Box, Heading } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import useTotalNewMessages from '../../hooks/useTotalNewMessages';
import RedCircle from '../atoms/RedCircle';

type Props = {
  id: string;
  name: string;
  isActive: boolean;
}

const ChatRoomItemDetails: React.FC<Props> = ({ id, name, isActive }) => {
  const totalNewMessages: number = useTotalNewMessages(id);
  const showTotalNewMsg: boolean = useMemo(() => totalNewMessages > 0, [totalNewMessages])

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
        { showTotalNewMsg && (
          <RedCircle>{ totalNewMessages }</RedCircle>
        )}
      </Box>

    </Box>
  )
}

export default ChatRoomItemDetails