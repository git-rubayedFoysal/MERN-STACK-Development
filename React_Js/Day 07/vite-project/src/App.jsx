import { useCallback, useMemo, useState } from "react";
import Sum from "./Sum";
import "./App.css";
import Post from "./Post";

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1000000);

  const handleClick = useCallback(() => {
    console.log("Handle Click", count);
  }, [count]);

  const hello = useCallback(() => {
    console.log("Hello");
  }, []);

  let prime = useMemo(() => {
    let total = 0;
    for (let i = 2; i <= num; i++) {
      total++;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
          total--;
          break;
        }
      }
    }
    return total;
  }, [num]);

  const obj = useMemo(() => {
    return { name: "Foysal", age: 24 };
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {console.log("App render")}
        <h1>Counter : {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <h2>Current Number: {num}</h2>
        <button onClick={() => setNum(num + 1000)}>Increment Number</button>
        <Sum n={num} />
        <h3>Total Prime Number: {prime}</h3>
        <button onClick={handleClick}>Click</button>
        <Post values={obj} func={hello} />
      </div>
    </>
  );
}

export default App;
