import { useMemo } from "react";
import { useAppSelector } from "../redux/hooks"
import { selectActiveRoomID, selectMessagePerRoom } from "../redux/slice"
import { Message, MessagePerRoom } from "../types"

const useTotalNewMessages = (roomID: string): number => {
  const activeRoomID: string = useAppSelector(selectActiveRoomID);
  const messagePerRoom: MessagePerRoom = useAppSelector(selectMessagePerRoom);

  const totalNewMessages: number = useMemo(() => {
    if (roomID == activeRoomID)
      return 0;

    const messageReceived: Message[] = messagePerRoom[roomID]?.filter(msg => !msg.fromSender && !msg.isRead);
    return messageReceived?.length || 0;
  }, [roomID, activeRoomID, messagePerRoom]);


  return totalNewMessages
}

export default useTotalNewMessages