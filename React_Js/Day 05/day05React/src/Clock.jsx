import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show) {
      return;
    }

    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log("Render");
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [show]);

  return (
    <>
      <button
        style={{ marginTop: "15px", cursor: "pointer", color: "black" }}
        onClick={() => setShow(!show)}
      >
        {show ? "Hide" : "Show"}
      </button>
      {show && <h1>Current Time : {time}</h1>}
    </>
  );
}

export default Clock;
