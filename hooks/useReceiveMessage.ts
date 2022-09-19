import { useEffect } from 'react'
import { Socket } from 'socket.io-client';
import SocketClient from '../client/socket';
import { useAppDispatch } from '../redux/hooks';
import { addMessageReceived } from '../redux/slice';
import { MessageSent } from '../types';

/**
 * A custom hook to init a listener
 * for "receive_message" event from socket server
 * @param socket a socket client
 */
const useReceiveMessage = (): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const socket: Socket = SocketClient.getInstance();
    if (!socket) return;

    socket.on("receive_message", (data: MessageSent) => {
      dispatch(addMessageReceived(data))
    });
  }, [dispatch]);
}

export default useReceiveMessage