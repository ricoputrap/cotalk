import { Stack } from '@chakra-ui/react'
import React from 'react'
import { ChatRoom } from '../../types'
import ChatRoomItem from '../ChatRoomItem';

type Props = {
  rooms: ChatRoom[];
}

const ChatRooms: React.FC<Props> = ({ rooms }) => {
  return (
    <Stack rowGap={0}>
      { rooms.map(room => (
        <ChatRoomItem
          key={ room.id }
          id={ room.id }
          name={ room.name }
          isActive={ room.isActive }
        />
      ))}
    </Stack>
  )
}

export default ChatRooms