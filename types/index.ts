import { Socket } from "socket.io-client";

export type Message = {
  id: number;
  content: string;
  fromSender: boolean;
}

export type ChatRoom = {
  id: string;
  name: string;
  isActive: boolean;
}

export type ChatState = {
  messages: Message[];
  activeRoomID: string;
  rooms: ChatRoom[];
}

export type SocketClient = Socket | undefined;