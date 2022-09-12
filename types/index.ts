import { Socket } from "socket.io-client";

export type Message = {
  id: number;
  content: string;
  fromSender: boolean;
}

export type ChatState = {
  messages: Message[];
}

export type ChatRoom = {
  id: string;
  name: string;
  isActive: boolean;
}

export type SocketClient = Socket | undefined;