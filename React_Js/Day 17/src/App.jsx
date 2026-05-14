import AddTodo from "./components/AddTodo";
import Counter from "./components/Counter";
import Posts from "./components/Posts";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="w-full h-screen bg-white/70 text-slate-700 py-8">
      <div className="max-w-lg mx-auto bg-gray-300 p-10 rounded-xl shadow-sm">
        <h1 className="text-center text-3xl font-bold w-full">Simple App</h1>

        <div className="mt-5 w-full">
          <Counter />
          <AddTodo />
          <Todos />
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default App;
