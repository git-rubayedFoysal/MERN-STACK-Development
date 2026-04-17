import { useRef } from "react";

function VideoPlayer() {
  const videoRef = useRef(null);

  function handleStart() {
    videoRef.current.play();
  }

  function handleStop() {
    videoRef.current.pause();
  }

  function handleReset() {
    videoRef.current.currentTime = 0;
    videoRef.current.pause();
  }
  function handleAdd() {
    videoRef.current.currentTime += 5;
  }
  function handleSub() {
    videoRef.current.currentTime -= 5;
  }
  return (
    <>
      <video
        src="../public/6009677-uhd_3840_2160_30fps.mp4"
        width="600px"
        controls
        ref={videoRef}
      ></video>
      <div style={{ marginBottom: "60px" }}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Pause</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleAdd}>+ 5sec</button>
        <button onClick={handleSub}>- 5sec</button>
      </div>
    </>
  );
}

export default VideoPlayer;
