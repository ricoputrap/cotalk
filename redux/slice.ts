import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { ChatRoom, Message } from "../types";
import initialState from "./initialState";
import { RootState } from "./store";

const slice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessageReceived: (state, action: PayloadAction<string>) => {
      const activeRoomID: string = state.activeRoomID;

      const messages: Message[] = state.messages[activeRoomID] || [];
      const newMessage: Message = {
        id: messages.length,
        content: action.payload,
        fromSender: false
      }

      const updatedMessages = [...messages, newMessage];
      state.messages[activeRoomID] = updatedMessages;
    },

    addMessageSent: (state, action: PayloadAction<string>) => {
      const activeRoomID: string = state.activeRoomID;

      const messages: Message[] = state.messages[activeRoomID] || [];
      const newMessage: Message = {
        id: messages.length,
        content: action.payload,
        fromSender: true
      }

      const updatedMessages = [...messages, newMessage];
      state.messages[activeRoomID] = updatedMessages;
    },

    joinRoom: (state, action: PayloadAction<string>) => {
      const rooms: Draft<ChatRoom>[] = Array.from(state.rooms);
      const activeRoomIndex: number = rooms.findIndex(room => room.id === state.activeRoomID);
      const newActiveRoomIndex: number = rooms.findIndex(room => room.id == action.payload);

      rooms[activeRoomIndex].isActive = false;
      rooms[newActiveRoomIndex].isActive = true;

      state.rooms = rooms;
      state.activeRoomID = action.payload;
    }
  }
});

export const { addMessageReceived, addMessageSent, joinRoom } = slice.actions;

export const selectMessages = (state: RootState): Message[] => {
  const activeRoomID: string = state.messageReducer.activeRoomID;  
  const messages: Message[] = state.messageReducer.messages[activeRoomID] || [];
  return messages;
};
export const selectRooms = (state: RootState) => state.messageReducer.rooms;
export const selectActiveRoomID = (state: RootState) => state.messageReducer.activeRoomID;

export default slice.reducer;