import { Stack } from '@chakra-ui/react';
import React from 'react'
import useRooms from '../../hooks/useRooms';
import { ChatRoom } from '../../types'
import ChatRoomItem from '../molecules/ChatRoomItem';

type Props = {
  rooms: ChatRoom[];
}

const ChatRooms: React.FC<Props> = ({ rooms }) => {
  const { joinRoom } = useRooms();

  return (
    <Stack rowGap={0} padding="20px">
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