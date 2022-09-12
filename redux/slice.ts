import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "../types";
import initialState from "./initialState";
import { RootState } from "./store";

const slice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setSocket: (state, action: PayloadAction<any>) => {
      if (state.socket) return;
      state.socket = action.payload;
    },

    addMessage: (state, action: PayloadAction<string>) => {
      const newMessage: Message = {
        id: state.messages.length,
        content: action.payload,
        fromSender: false
      }
      state.messages = [...state.messages, newMessage]
    }
  }
});

export const { addMessage, setSocket } = slice.actions;

export const selectMessages = (state: RootState) => state.messageReducer.messages
export const selectSocket = (state: RootState) => state.messageReducer.socket;

export default slice.reducer;