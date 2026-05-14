import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incByAmount,
} from "../features/Counter/counterSlice";
import { useState } from "react";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  const handleAmount = () => {
    dispatch(incByAmount(amount));
    setAmount(0);
  };

  return (
    <div className="w-full bg-gray-300 rounded-md shadow-md py-10 px-8 text-center">
      <h1 className="text-center text-3xl">Count: {count}</h1>
      <div className="mt-8 flex justify-center items-center gap-2.5">
        <button
          className="bg-green-600 font-bold rounded-sm cursor-pointer py-2 text-white text-sm w-sm hover:bg-green-700"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="bg-green-600 font-bold rounded-sm cursor-pointer py-2 text-white text-sm w-sm hover:bg-green-700"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className="bg-green-600 font-bold rounded-sm cursor-pointer py-2 text-white text-sm w-sm hover:bg-green-700"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>

      <div className="w-full mt-3">
        <input
          type="number"
          className="w-full py-2 bg-white/40 font-bold outline-none rounded px-2 text-sm focus:border focus:border-green-900"
          placeholder="Enter Amount.."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="bg-green-600 w-4/12 mt-2 font-bold rounded-sm cursor-pointer py-2 text-white text-sm hover:bg-green-700"
          onClick={handleAmount}
        >
          IncByAmount
        </button>
      </div>
    </div>
  );
}

export default Counter;
