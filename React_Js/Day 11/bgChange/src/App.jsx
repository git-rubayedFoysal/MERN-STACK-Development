import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="w-4xl h-14 bg-emerald-900 fixed bottom-18 rounded-xl flex justify-center items-center">
        <div className="flex justify-around gap-6 items-center overflow-hidden font-bold">
          <button
            onClick={() => setColor("red")}
            className="outline-none bg-red-800 pt-2 pb-2 rounded-lg pr-8 pl-8 text-white cursor-pointer"
          >
            Red
          </button>
          <button
            onClick={() => setColor("seagreen")}
            className="outline-none bg-green-500 pt-2 pb-2 rounded-lg pr-8 pl-8 text-white cursor-pointer"
          >
            Seagreen
          </button>
          <button
            onClick={() => setColor("dodgerblue")}
            className="outline-none bg-blue-500 pt-2 pb-2 rounded-lg pr-8 pl-8 text-black cursor-pointer"
          >
            Dodgerblue
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none bg-pink-500 pt-2 pb-2 rounded-lg pr-8 pl-8 text-white cursor-pointer"
          >
            Pink
          </button>
          <button
            onClick={() => setColor("crimson")}
            className="outline-none bg-red-600 pt-2 pb-2 rounded-lg pr-8 pl-8 text-white cursor-pointer"
          >
            Crimson
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none bg-black pt-2 pb-2 rounded-lg pr-8 pl-8 text-white cursor-pointer"
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
