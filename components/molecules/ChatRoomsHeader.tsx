import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { IoMdAdd } from "react-icons/io"
import Header from '../atoms/Header.styles'
import ProfilePicture from '../atoms/ProfilePicture'

const ChatRoomsHeader: React.FC = () => {
  return (
    <Header>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="100%"
        paddingX="30px"
      >
        <Box
          display="flex"
          alignItems="center"
          columnGap="20px"
        >
          <ProfilePicture />
          <Heading size="sm" color="dark">
            Your Name
          </Heading>
        </Box>

        <Box>
          <Button
            size="md"
            color="mid"
            paddingX="12px"
            borderRadius="100%"
          >
            <IoMdAdd />
          </Button>
        </Box>
      </Box>
    </Header>
  )
}

export default ChatRoomsHeader