import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { ChatRoom, Message } from "../types";
import initialState from "./initialState";
import { RootState } from "./store";

const slice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessageReceived: (state, action: PayloadAction<string>) => {
      const newMessage: Message = {
        id: state.messages.length,
        content: action.payload,
        fromSender: false
      }
      state.messages = [...state.messages, newMessage]
    },

    addMessageSent: (state, action: PayloadAction<string>) => {
      const newMessage: Message = {
        id: state.messages.length,
        content: action.payload,
        fromSender: true
      }

      state.messages = [...state.messages, newMessage]
    },

    joinRoom: (state, action: PayloadAction<string>) => {
      const rooms: Draft<ChatRoom>[] = Array.from(state.rooms);
      const activeRoomIndex: number = rooms.findIndex(room => room.id === state.activeRoomID);
      const newActiveRoomIndex: number = rooms.findIndex(room => room.id == action.payload);

      rooms[activeRoomIndex].isActive = false;
      rooms[newActiveRoomIndex].isActive = true;

      state.rooms = rooms;
    }
  }
});

export const { addMessageReceived, addMessageSent, joinRoom } = slice.actions;

export const selectMessages = (state: RootState) => state.messageReducer.messages;
export const selectRooms = (state: RootState) => state.messageReducer.rooms;
export const selectActiveRoomID = (state: RootState) => state.messageReducer.activeRoomID;

export default slice.reducer;