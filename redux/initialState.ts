import { ChatState } from "../types";

const initialState: ChatState = {
  messages: {},

  activeRoomID: "1",
  rooms: [
    { id: "1", name: "Room 1", isActive: true },
    { id: "2", name: "Room 2", isActive: false },
    { id: "3", name: "Room 3", isActive: false },
    { id: "4", name: "Room 4", isActive: false },
    { id: "5", name: "Room 5", isActive: false },
    { id: "6", name: "Room 6", isActive: false },
  ],
  isCreatingNewRoom: false
}

export default initialState;