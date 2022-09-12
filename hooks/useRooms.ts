import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { joinRoom as joinRoomAction, selectActiveRoomID, selectRooms } from "../redux/slice";
import { ChatRoom, SocketClient } from "../types";

const useRooms = (socket: SocketClient = undefined) => {
  const dispatch = useAppDispatch();
  const rooms: ChatRoom[] = useAppSelector(selectRooms);
  const activeRoomID: string = useAppSelector(selectActiveRoomID);

  useEffect(() => {
    if (!socket) return;

    socket.emit("join_room", activeRoomID);
  }, [activeRoomID, socket]);

  const joinRoom = (roomID: string) => {
    dispatch(joinRoomAction(roomID));
  }
  

  return { rooms, joinRoom }
}

export default useRooms;