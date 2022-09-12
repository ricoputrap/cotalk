import { useEffect } from 'react'
import { useAppDispatch } from '../redux/hooks';
import { addMessage } from '../redux/slice';
import { SocketClient } from '../types';

/**
 * A custom hook to init a listener
 * for "receive_message" event from socket server
 * @param socket a socket client
 */
const useReceiveMessage = (socket: SocketClient): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!socket) return;

    socket.on("receive_message", (data: any) => {
      dispatch(addMessage(data.message))
    });
  }, [socket, dispatch]);
}

export default useReceiveMessage