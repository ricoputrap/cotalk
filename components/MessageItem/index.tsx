import React from 'react'
import { Message } from '../../types'

type Props = {
  message: Message;
}

const MessageItem: React.FC<Props> = ({ message }) => {
  return (
    <div>
      { message.content }
    </div>
  )
}

export default MessageItem