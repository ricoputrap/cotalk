import { Socket } from "socket.io-client";

export type MessageSent = {
  message: string;
  room: string;
}

export type Message = {
  id: number;
  content: string;
  fromSender: boolean;
}

export type MessagePerRoom = {
  [roomID: string]: Message[];
}

export type ChatRoom = {
  id: string;
  name: string;
  isActive: boolean;
}

export type ChatState = {
  messages: MessagePerRoom;
  activeRoomID: string;
  rooms: ChatRoom[];
}

export type SocketClient = Socket | undefined;