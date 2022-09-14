import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { closeFormNewRoom, openFormNewRoom, selectIsCreatingNewRoom } from "../redux/slice";

const useCreateNewRoom = () => {
  const dispatch = useAppDispatch();
  const isCreatingNewRoom: boolean = useAppSelector(selectIsCreatingNewRoom);
  
  const openForm = () => { dispatch(openFormNewRoom()); }
  const closeForm = () => dispatch(closeFormNewRoom());

  return { isCreatingNewRoom, openForm, closeForm };
}

export default useCreateNewRoom;