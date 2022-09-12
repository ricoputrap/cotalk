import { useEffect, useState } from 'react'
import { io, Socket } from "socket.io-client";
import { SocketClient } from '../types';

/**
 * A custom hook to init a connection to the socket server
 * @returns the instance of socket client
 */
const useSocketClient = (): SocketClient => {

  /**
   * Note:
   * Redux can't store a non-serializable object.
   * So the `socket` instance will be distributed
   * through props.
   * 
   * Discussion: https://stackoverflow.com/a/61706168
   */
  const [socket, setSocket] = useState<Socket>();
  useEffect(() => {
    const SOCKET_HOST: string = process.env.NEXT_PUBLIC_SOCKET_SERVER || "";
    const clientSocket: Socket = io(SOCKET_HOST, {
      transports: ["websocket"]
    });

    setSocket(clientSocket);

    // close the connection
    return () => {
      if (clientSocket) clientSocket.close();
    }
  }, []);

  return socket;
}

export default useSocketClient