import { useEffect } from "react";
import { Socket } from "socket.io-client";
import SocketClient from "../client/socket";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { joinRoom as joinRoomAction, selectRooms } from "../redux/slice";
import { ChatRoom } from "../types";

const useRooms = () => {
  const dispatch = useAppDispatch();
  const rooms: ChatRoom[] = useAppSelector(selectRooms);

  // init a socket connection to all joined rooms
  // all joined rooms will be displayed on the screen
  useEffect(() => {
    const socket: Socket = SocketClient.getInstance();
    if (!socket) return;

    rooms.forEach(room => {
      socket.emit("join_room", room.id);
    });
  }, [rooms]);

  const joinRoom = (roomID: string) => {
    dispatch(joinRoomAction(roomID));
  }
  

  return { rooms, joinRoom }
}

export default useRooms;