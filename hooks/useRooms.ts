import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import { selectActiveRoomID, selectRooms } from "../redux/slice";
import { ChatRoom, SocketClient } from "../types";

const useRooms = (socket: SocketClient) => {
  const rooms: ChatRoom[] = useAppSelector(selectRooms);
  const activeRoomID: string = useAppSelector(selectActiveRoomID);

  useEffect(() => {
    if (!socket) return;

    socket.emit("join_room", activeRoomID);
  }, [activeRoomID, socket])

  return { rooms }
}

export default useRooms;