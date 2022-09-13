import { Flex } from '@chakra-ui/react';
import React from 'react'
import { ChatRoom } from '../../types'
import ProfilePicture from '../atoms/ProfilePicture';
import ChatRoomItemDetails from './ChatRoomItemDetails';

interface Props extends ChatRoom {
  join: (roomID: string) => void;
}

const ChatRoomItem: React.FC<Props> = ({ id, name, isActive, join }) => {
  return (
    <Flex
      height="80px"
      columnGap="20px"
      alignItems="center"
      background={ isActive ? "brand !important" : "transparent" }
      padding="10px"
      margin="0 !important"
      borderRadius="12px"
      _hover={{
        background: "gray.100",
        cursor: "pointer"
      }}
      onClick={() => join(id)}
    >
      <ProfilePicture />
      <ChatRoomItemDetails
        id={ id }
        name={ name }
        isActive={ isActive }
      />
    </Flex>
  )
}

export default ChatRoomItem