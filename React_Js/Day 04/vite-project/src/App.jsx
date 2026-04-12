import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  function increment() {
    setInterval(() => {
      count++;
      setCount(count);
    }, 1000);
  }

  return (
    <>
      <p>Counter : {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default App;
