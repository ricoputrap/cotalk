import { Box, Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineSend } from "react-icons/ai";
import { Socket } from 'socket.io-client';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addMessageSent, selectActiveRoomID } from '../../redux/slice';
import SocketClient from '../../client/socket';


const ComposeBox: React.FC = () => {

  const dispatch = useAppDispatch();
  const activeRoomID: string = useAppSelector(selectActiveRoomID);
  const [message, setMessage] = useState<string>("");

  const sendMessage = (event: React.SyntheticEvent) => {
    event.preventDefault();
    
    const socket: Socket = SocketClient.getInstance();
    if (!socket) return;

    socket.emit("send_message", {
      message,
      room: activeRoomID
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
              _hover={{
                backgroundColor: "brandDark"
              }}
            >
              <AiOutlineSend />
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  )
}

export default ComposeBox