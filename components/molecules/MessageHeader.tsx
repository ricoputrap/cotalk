import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import useMessageHeader from '../../hooks/useMessageHeader'
import Header from '../atoms/Header.styles'
import ProfilePicture from '../atoms/ProfilePicture'

const MessageHeader = () => {
  const { activeRoom } = useMessageHeader();

  return (
    <Header>
      <Box
        display="flex"
        alignItems="center"
        columnGap="20px"
        height="100%"
        padding="10px 20px"
      >
        <ProfilePicture />

        <Heading size="sm" color="dark">
          { activeRoom?.name }
        </Heading>
      </Box>
    </Header>
  )
}

export default MessageHeader