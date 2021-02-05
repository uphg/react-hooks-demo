// 使用 useReducer 案例
import React, { useReducer } from 'react';

const myReducer = (state, action) => {
  switch(action.type)  {
    case('countUp'):
      return {
        ...state,
        count: state.count + 2
      }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(myReducer, { count: 0 });
  return (
    <div className="count-demo">
      <p>Count: {state.count}</p>
      <div>
        <button
          onClick={() => dispatch({ type: 'countUp' })}
        >+2</button>
      </div>
    </div>
  );
}
export default App