import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [count, setCount] = useState(0); //initialise with 0 state with useState syntax

  const increaseCount = () => {
    setCount(count+1); // there a better method of doing it.
  }

  const decreaseCount = () => {
    setCount(count-1); // there a better method of doing it.
  }

  return (
    <div className="App">
      <div className="AppHeader">COUNTER</div>
      <div className="Counter">
      {/* Button to decrease the count */}
        <button onClick={()=>decreaseCount()}>-</button>

      {/* Dynamic count --> State */}

        <p>{count}</p>

      {/* Button to increase the count */}
        <button onClick={()=>increaseCount()}>+</button>
      </div>
    </div>
  );
};

export default App;

// fun a(){};  a();
