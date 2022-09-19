import { Stack } from '@chakra-ui/react';
import React from 'react'
import useRooms from '../../hooks/useRooms';
import { ChatRoom } from '../../types'
import ChatRoomItem from '../molecules/ChatRoomItem';

type Props = {
  initialRooms: ChatRoom[];
}

const ChatRooms: React.FC<Props> = ({ initialRooms }) => {
  const { rooms, joinRoom } = useRooms(initialRooms);

  return (
    <Stack rowGap={0} padding="20px" overflowY="scroll">
      { rooms.map(room => (
        <ChatRoomItem
          key={ room.id }
          id={ room.id }
          name={ room.name }
          isActive={ room.isActive }
          join={ joinRoom }
        />
      ))}
    </Stack>
  )
}

export default ChatRooms