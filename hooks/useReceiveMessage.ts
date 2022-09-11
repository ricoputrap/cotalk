import { useEffect } from 'react'
import { Socket } from 'socket.io-client'
import { useAppDispatch } from '../redux/hooks';
import { addMessage } from '../redux/slice';

/**
 * A custom hook to init a listener
 * for "receive_message" event from socket server
 * @param socket a socket client
 */
const useReceiveMessage = (socket: Socket): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!socket) return;

    socket.on("receive_message", (data: any) => {
      dispatch(addMessage(data.message))
    });
  }, [socket, dispatch]);
}

export default useReceiveMessage