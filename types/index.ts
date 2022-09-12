import { Socket } from "socket.io-client";

export type Message = {
  id: number;
  content: string;
  fromSender: boolean;
}

export type ChatState = {
  messages: Message[];
}

export type SocketClient = Socket | undefined;