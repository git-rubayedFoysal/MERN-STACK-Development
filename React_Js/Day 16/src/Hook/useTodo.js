import { TodoContext } from "../Context/TodoContext";
import { useContext } from "react";

function useTodo() {
  return useContext(TodoContext);
}

export default useTodo;
