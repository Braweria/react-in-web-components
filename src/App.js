import { Task } from "./Task";
import "./App.css";
import { useEffect, useState } from "react";

function App({ userId }) {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getTasks(userId) {
      try {
        const response = await fetch(
          `https://dummyjson.com/todos/user/${userId}`
        );
        const todos = await response.json();
        setTasks((prev) => [...prev, ...todos.todos]);
      } catch (error) {
        console.log(error);
      }
    }

    async function getUser(userId) {
      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        const user = await response.json();
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    }

    getTasks(userId);
    getUser(userId);
  }, []);

  return (
    <div style={{ margin: "1rem" }}>
      <section>
        <h1>
          Welcome Back, {user.firstName} {user.lastName}
        </h1>
        <ul>
          {tasks.map((task) => (
            <Task key={task.id + Math.random()} {...task} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
