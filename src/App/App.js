import './App.css';
// 按钮点击 + 1
import Demo1 from '../view/demo-1/Button.js'
// 使用 useContext 传值
import Demo2 from '../view/demo-2/ContextDemo.js'
// 使用 useReducer 变更状态
import Demo3 from '../view/demo-3/CounterDemo.js'
// 使用 useEffect 引入副作用操作
import Demo4 from '../view/demo-4/EffectDemo.js'
// 分离 hooks 的 useEffect 部分
import Demo5 from '../view/demo-5/EffectDemo.js'

function App() {
  return (
    <div className="App">
      <div className="block">
        <Demo1 />
      </div>
      <div className="block">
        <Demo2 />
      </div>
      <div className="block">
        <Demo3 />
      </div>
      <div className="block">
        <Demo4 />
      </div>
      <div className="block">
        <Demo5 />
      </div>
    </div>
  );
}

export default App;
