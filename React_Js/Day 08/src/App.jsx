import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const [time, setTime] = useState(0);
  const intervalId = useRef(null);

  function handleStart() {
    if (intervalId.current) {
      return;
    }

    intervalId.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }

  function handleStop() {
    clearInterval(intervalId.current);
    intervalId.current = null;
  }

  function handleReset() {
    clearInterval(intervalId.current);
    intervalId.current = null;
    setTime(0);
  }

  return (
    <div id="App">
      <h2>Stopwatch</h2>
      <h1>{time}</h1>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
