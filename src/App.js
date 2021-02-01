import React, { useState, useEffect } from "react";
import './App.css';
import Box from "./Box";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const output = document.querySelector("#output");
    output.innerText = count;
  });
  return (
    <div className="App">
      <p>{count}</p>
      <div>
        <button onClick={() => setCount(count + 1)}>点击 +1</button>
      </div>
      <Box />
    </div>
  );
}

export default App;
