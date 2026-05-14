import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  incByValue,
  increment,
  reset,
} from "../features/Counter/counterSlice";
import { useState } from "react";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const handleIncByValue = () => {
    dispatch(incByValue(amount));
    setAmount(0);
  };

  return (
    <div className="w-full text-center font-bold flex flex-col gap-y-3 justify-center items-between">
      <div className="flex items-center gap-1.5">
        <input
          type="number"
          className="flex-10 bg-gray-800 rounded py-2 px-3 text-gray-200"
          placeholder="Enter Amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={handleIncByValue}
          className="text-gray-200 bg-indigo-500 flex-2 border-0 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm py-2.5 cursor-pointer"
        >
          IncByValue
        </button>
      </div>
      <p className="text-md">Count : {count}</p>
      <div className="flex gap-3 justify-center items-center">
        <button
          onClick={() => dispatch(increment())}
          className="text-gray-200 bg-indigo-500 border-0 px-6 focus:outline-none hover:bg-indigo-600 rounded text-md font-bold cursor-pointer
           py-2"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="text-gray-200 bg-indigo-500 border-0 px-6 focus:outline-none hover:bg-indigo-600 rounded text-md font-bold cursor-pointer 
          py-2"
        >
          -
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="text-gray-200 bg-indigo-500 border-0 px-6 focus:outline-none hover:bg-indigo-600 rounded font-bold text-md py-2 
          cursor-pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
