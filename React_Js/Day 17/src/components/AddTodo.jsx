import { useDispatch } from "react-redux";
import { addTodo } from "../features/TodoApp/todoSlice";
import { useState } from "react";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandle = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <form
        onSubmit={addTodoHandle}
        className="space-x-1 mt-12 flex gap-2 justify-between"
      >
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out flex-9"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm w-fit flex-2 cursor-pointer"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
