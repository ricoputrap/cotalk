import { useEffect, useState } from 'react'
import { io, Socket } from "socket.io-client";

/**
 * A custom hook to init a connection to the socket server
 * @returns the instance of socket client
 */
const useSocketClient = () => {
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