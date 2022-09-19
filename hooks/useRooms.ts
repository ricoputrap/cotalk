import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { joinRoom as joinRoomAction, selectRooms, setRooms } from "../redux/slice";
import { ChatRoom } from "../types";

const useRooms = (initialRooms: ChatRoom[] = []) => {

  const dispatch = useAppDispatch();
  const rooms: ChatRoom[] = useAppSelector(selectRooms);

  useEffect(() => {
    if (!initialRooms || initialRooms.length === 0) return;
    dispatch(setRooms(initialRooms));
  }, [initialRooms, dispatch]);

  const joinRoom = (roomID: string) => {
    dispatch(joinRoomAction(roomID));
  }
  

  return { rooms, joinRoom }
}

export default useRooms;