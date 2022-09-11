export type Message = {
  id: number;
  content: string;
  fromSender: boolean;
}

export type ChatState = {
  messages: Message[];
}