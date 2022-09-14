import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { readMessage } from "../redux/slice";

const useReadMessage = (roomID: string, messageID: number, isRead: boolean) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isRead) return;

    dispatch(readMessage({ roomID, messageID }))
  }, [roomID, messageID, isRead, dispatch]);
}

export default useReadMessage;