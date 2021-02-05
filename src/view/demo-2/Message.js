import React, { useContext } from 'react';
import AppContext from './hooks/context.js'

function Message() {
  const { username } = useContext(AppContext)
  return (
    <div className="messages">
      <h2>Messages</h2>
      <p>收到一条消息：{username}</p>
    </div>
  )
}

export default Message