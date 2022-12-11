import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  function clickHandler() {
    if(count>-1){
      setError(false)
    }
    setCount(count + 1);
  }
  function clickHandlerMinus() {
    if (count == 0) {
      setError(true);
      return;
    }
    setCount(count - 1);
  }

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={clickHandler}>+1</button>
      <button onClick={clickHandlerMinus}>-1</button>
      {error && <div>Neigiami skaičiai negalimi</div>}
    </div>
  );
}

export default App;
