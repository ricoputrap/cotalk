import { Box, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useAppDispatch } from '../../redux/hooks';
import { addMessageSent } from '../../redux/slice';
import { SocketClient } from '../../types';

type Props = {
  socket: SocketClient;
}

const ComposeBox: React.FC<Props> = ({ socket }) => {

  const dispatch = useAppDispatch();
  const [message, setMessage] = useState<string>("");

  const sendMessage = (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!socket) return;

    socket.emit("send_message", {
      message
    });

    dispatch(addMessageSent(message));
    setMessage("");

  }

  return (
    <Box
      width="100%"
      height="64px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <form onSubmit={sendMessage} style={{ width: "100%" }}>
        <InputGroup
          borderRadius="100px"
          borderColor="transparent"
          backgroundColor="light"
          size="lg"
        >
          <Input
            borderRadius="100px"
            focusBorderColor="transparent"
            placeholder="Type your message here..."
            value={ message }
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setMessage(event.target.value);
            }}
          />

          <InputRightElement>
            <Button
              variant="solid"
              background="brand"
              color="light"
              size="md"
              paddingX="12px"
              borderRadius="100%"
              type='submit'
            >
              S
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  )
}

export default ComposeBox