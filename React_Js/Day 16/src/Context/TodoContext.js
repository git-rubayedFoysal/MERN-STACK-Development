/* eslint-disable no-unused-vars */
import { createContext } from "react";

export const TodoContext = createContext({
  todo: [
    {
      id: 1,
      todo_msg: "This is todo",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;
