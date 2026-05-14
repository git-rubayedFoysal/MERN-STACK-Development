import { useEffect, useState } from "react";
import { TodoProvider } from "./Context/TodoContext";
import { TodoForm, TodoItem } from "./Components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo]);
  };

  const updateTodo = (todo, id) => {
    setTodos((prevTodo) =>
      prevTodo.map((eachTodo) => (eachTodo.id === id ? todo : eachTodo)),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id != id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#333] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto rounded px-4 py-3 text-white border-2 border-[#444] font-bold">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
