import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { joinRoom as joinRoomAction, selectActiveRoomID, selectRooms } from "../redux/slice";
import { ChatRoom, SocketClient } from "../types";

const useRooms = (socket: SocketClient = undefined) => {
  const dispatch = useAppDispatch();
  const rooms: ChatRoom[] = useAppSelector(selectRooms);

  // init a socket connection to all joined rooms
  // all joined rooms will be displayed on the screen
  useEffect(() => {
    if (!socket) return;

    rooms.forEach(room => {
      socket.emit("join_room", room.id);
    });
  }, [rooms, socket]);

  const joinRoom = (roomID: string) => {
    dispatch(joinRoomAction(roomID));
  }
  

  return { rooms, joinRoom }
}

export default useRooms;