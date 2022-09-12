import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react'
import { ChatRoom } from '../../types';

interface Props extends ChatRoom {
  join: (roomID: string) => void;
}

const ChatRoomItem: React.FC<Props> = ({ id, name, isActive, join }) => {
  return (
    <Flex
      columnGap="20px"
      alignItems="center"
      background={ isActive ? "gray.100" : "transparent" }
      padding="10px 20px"
      margin="0 !important"
      _hover={{
        background: "gray.100",
        cursor: "pointer"
      }}
      onClick={() => join(id)}
    >
      <Box
        width="60px"
        height="60px"
        borderRadius="100%"
        backgroundColor="mid"
      ></Box>
      <Heading size="sm" color="dark">{ name }</Heading>
    </Flex>
  )
}

export default ChatRoomItem