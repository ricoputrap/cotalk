import { io, Socket } from "socket.io-client";

class SocketClient {
  private static instance: Socket;
  private static SOCKET_HOST: string = process.env.NEXT_PUBLIC_SOCKET_SERVER || "";

  public static getInstance(): Socket {
    if (SocketClient.instance == undefined) {
      SocketClient.instance = io(SocketClient.SOCKET_HOST, {
        transports: ["websocket"]
      });
    }

    return SocketClient.instance;
  }

  public static closeConnection(): void {
    if (SocketClient.instance) {
      SocketClient.instance.close();
    }
  }
}

export default SocketClient;