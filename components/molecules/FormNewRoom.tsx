import { Box, IconButton, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoMdCheckmark } from "react-icons/io"
import { FaTimes } from "react-icons/fa"
import { Socket } from 'socket.io-client';
import { useAppDispatch } from '../../redux/hooks';
import { joinRoom } from '../../redux/slice';
import useCreateNewRoom from '../../hooks/useCreateNewRoom';
import SocketClient from '../../client/socket';


const FormNewRoom: React.FC = () => {
  const { closeForm } = useCreateNewRoom();
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");

  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  }

  const createNewRoom = (): void => {
    if (name == "") return;
    
    const socket: Socket = SocketClient.getInstance();
    if (!socket) return;

    // save it to store -> will display it on the screen
    dispatch(joinRoom(name));

    // send it to socket server
    socket.emit("join_room", name);

    // close this component or reset the `name` value
    setName("");

    closeForm();
  }

  return (
    <Box padding="20px" display="flex" columnGap="4px">
      <Input value={ name } onChange={ onChange } />
      
      <IconButton
        aria-label='Create New Room'
        onClick={ createNewRoom }
        icon={<IoMdCheckmark />}
        size="md"
        color="light"
        background="brand"
        _hover={{
          backgroundColor: "brandDark"
        }}
        _active={{
          backgroundColor: "brandDark"
        }}
      />

      <IconButton
        aria-label='Create New Room'
        icon={<FaTimes />}
        size="md"
        color="mid"
        onClick={ closeForm }
      />
    </Box>
  )
}

export default FormNewRoom