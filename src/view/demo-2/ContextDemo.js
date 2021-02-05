import React from 'react' 
import Navbar from './Navber.js'
import Messages from './Message.js'
import AppContext from './hooks/context.js'

function ContextDemo() {
  return (
    <AppContext.Provider value={{
      username: '张三'
    }}>
      <div className="context-demo">
        <Navbar/>
        <Messages/>
      </div>
    </AppContext.Provider>
  )
}

export default ContextDemo