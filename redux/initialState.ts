import { ChatState } from "../types";

const initialState: ChatState = {
  messages: {},

  activeRoomID: "-1",
  rooms: [],
  isCreatingNewRoom: false
}

export default initialState;