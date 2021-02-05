import Navbar from './Navber.js'
import Messages from './Message.js'

const AppContext = React.createContext({});

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