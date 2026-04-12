import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    async function githubUsers() {
      const response = await fetch(
        `https://api.github.com/users?per_page=${count}`,
      );
      const data = await response.json();
      setUsers(data);
      console.log(`Render`);
    }

    githubUsers();
  }, [count]);

  return (
    <>
      <h1>GitHub Users</h1>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <div id="container">
        {users.map((user) => (
          <img
            src={user.avatar_url}
            key={user.id}
            className="github-img"
            alt={user.login}
          />
        ))}
      </div>
    </>
  );
}

export default App;
