import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/TodoApp/todoSlice";
import counterReducer from "../features/Counter/counterSlice";
import postReducer from "../features/Posts/postSlice";

const store = configureStore({
  reducer: {
    todoApp: todoReducer,
    counter: counterReducer,
    posts: postReducer,
  },
});

export default store;
