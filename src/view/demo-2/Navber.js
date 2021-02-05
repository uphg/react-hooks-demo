import React, { useContext } from 'react';
import AppContext from './hooks/context.js'

function Navbar() {
  const { username } = useContext(AppContext);
  return (
    <div className="navbar">
      <h2>Navbar</h2>
      <p>收到一条消息：{username}</p>
    </div>
  )
}

export default Navbar