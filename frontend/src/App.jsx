import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  function IncreaseCount() {
    setCount(count + 1);
  }
  console.log("hello");
  useEffect(function () {
    setInterval(function () {
      setCount((count) => count + 1);
      console.log(count);
    }, 1000);
  }, []);

  return (
    <div className="card">
      <h1 id="Text">{count}</h1>
      <button onClick={IncreaseCount}>IncreaseCount</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter></Counter>;
    </div>
  );
}

export default App;
