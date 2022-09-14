import { useAppSelector } from "../redux/hooks";
import { selectActiveRoomID, selectMessages } from "../redux/slice";
import { Message } from "../types";

const useDisplayMessages = () => {
  const messages: Message[] = useAppSelector(selectMessages);
  const activeRoomID: string = useAppSelector(selectActiveRoomID);

  return { messages, activeRoomID }
}

export default useDisplayMessages;