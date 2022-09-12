import { useEffect } from "react";
import { Socket } from "socket.io-client";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectSocket, setSocket } from "../redux/slice";
import { SocketClient } from "../types";

const useSocket = (socketClient: SocketClient = undefined): SocketClient => {
  const dispatch = useAppDispatch();
  const socket: Socket | undefined = useAppSelector(selectSocket);

  useEffect(() => {
    if (!socketClient) return;

    dispatch(setSocket(socketClient));
  }, [socketClient, dispatch]);

  return socket;
}

export default useSocket;