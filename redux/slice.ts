import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { ChatRoom, Message, MessageInRoom, MessageSent } from "../types";
import initialState from "./initialState";
import { RootState } from "./store";

const slice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessageReceived: (state, action: PayloadAction<MessageSent>) => {
      const { message, room: roomID } = action.payload;

      const messages: Message[] = state.messages[roomID] || [];
      const newMessage: Message = {
        id: messages.length,
        content: message,
        fromSender: false,
        isRead: false
      }

      const updatedMessages = [...messages, newMessage];
      state.messages[roomID] = updatedMessages;
    },

    addMessageSent: (state, action: PayloadAction<string>) => {
      const activeRoomID: string = state.activeRoomID;

      const messages: Message[] = state.messages[activeRoomID] || [];
      const newMessage: Message = {
        id: messages.length,
        content: action.payload,
        fromSender: true,
        isRead: true
      }

      const updatedMessages = [...messages, newMessage];
      state.messages[activeRoomID] = updatedMessages;
    },

    joinRoom: (state, action: PayloadAction<string>) => {
      const rooms: Draft<ChatRoom>[] = Array.from(state.rooms);
      let activeRoomID: string = action.payload;

      const activeRoomIndex: number = rooms.findIndex(room => room.id === state.activeRoomID);
      rooms[activeRoomIndex].isActive = false;
      
      const newActiveRoomIndex: number = rooms.findIndex(room => room.id == action.payload);
      if (newActiveRoomIndex !== -1)
        rooms[newActiveRoomIndex].isActive = true;
      else {
        const newRoom: ChatRoom = {
          id: (rooms.length + 1) + "",
          name: action.payload,
          isActive: true
        };
        rooms.push(newRoom);
        activeRoomID = newRoom.id;
      }

      state.rooms = rooms;
      state.activeRoomID = activeRoomID;
    },

    readMessage: (state, action: PayloadAction<MessageInRoom>) => {
      const { roomID, messageID } = action.payload;
      const messages: Message[] = state.messages[roomID] || [];
      const messageIndex: number = messages.findIndex(msg => msg.id == messageID);

      if (messageIndex == -1) return;

      state.messages[roomID][messageIndex] = {
        ...messages[messageIndex],
        isRead: true 
      }
    },

    openFormNewRoom: (state) => {
      state.isCreatingNewRoom = true;
    },
    closeFormNewRoom: (state) => {
      state.isCreatingNewRoom = false
    }
  }
});

export const { 
  addMessageReceived, addMessageSent,
  joinRoom, readMessage,
  openFormNewRoom, closeFormNewRoom
} = slice.actions;

export const selectMessages = (state: RootState): Message[] => {
  const activeRoomID: string = state.messageReducer.activeRoomID;  
  const messages: Message[] = state.messageReducer.messages[activeRoomID] || [];
  return messages;
};

export const selectRooms = (state: RootState) => state.messageReducer.rooms;
export const selectActiveRoomID = (state: RootState) => state.messageReducer.activeRoomID;
export const selectMessagePerRoom = (state: RootState) => state.messageReducer.messages;
export const selectActiveRoom = (state: RootState): ChatRoom | undefined => {
  const activeRoomID: string = state.messageReducer.activeRoomID;
  const activeRoom: ChatRoom | undefined = state.messageReducer.rooms.find(room => room.id == activeRoomID);

  return activeRoom;
}
export const selectIsCreatingNewRoom = (state: RootState) => state.messageReducer.isCreatingNewRoom;

export default slice.reducer;