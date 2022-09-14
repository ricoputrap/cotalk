import { useAppSelector } from "../redux/hooks";
import { selectActiveRoom } from "../redux/slice";
import { ChatRoom } from "../types";

const useMessageHeader = () => {
  const activeRoom: ChatRoom | undefined = useAppSelector(selectActiveRoom);

  return { activeRoom };
}

export default useMessageHeader;