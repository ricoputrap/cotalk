import { Box, IconButton, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoMdCheckmark } from "react-icons/io"
import { FaTimes } from "react-icons/fa"
import { useAppDispatch } from '../../redux/hooks';
import { joinRoom } from '../../redux/slice';
import { SocketClient } from '../../types';

type Props = {
  socket: SocketClient;
}

const FormNewRoom: React.FC<Props> = ({ socket }) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");

  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  }

  const createNewRoom = (): void => {
    if (name == "") return;

    // save it to store -> will display it on the screen
    dispatch(joinRoom(name));

    // send it to socket server
    socket?.emit("join_room", name);

    // close this component or reset the `name` value
    setName("");
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
      />
    </Box>
  )
}

export default FormNewRoom