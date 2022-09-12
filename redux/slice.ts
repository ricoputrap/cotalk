import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "../types";
import initialState from "./initialState";
import { RootState } from "./store";

const slice = createSlice({
  name: "chat",
  initialState,
  reducers: {
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

export const { addMessage } = slice.actions;

export const selectMessages = (state: RootState) => state.messageReducer.messages

export default slice.reducer;