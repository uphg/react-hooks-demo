import './App.css';
// 按钮点击 + 1
import Demo1 from '../view/demo-1/Button.js'
// 使用 useContext 传值
import Demo2 from '../view/demo-2/ContextDemo.js'
// 使用 useReducer 变更状态
import Demo3 from '../view/demo-3/CounterDemo.js'

function App() {
  return (
    <div className="App">
      <Demo1 />
      <hr />
      <Demo2 />
      <hr />
      <Demo3 />
    </div>
  );
}

export default App;
