import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Profile } from "./Profile";
import { TasksPage } from "./TasksPage";

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
  }, [userId]);

  return (
    <div style={{ margin: "1rem" }}>
      <section>
        <h1>
          Welcome Back, {user.firstName} {user.lastName}
        </h1>
        <menu style={{ backgroundColor: "salmon" }}>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/">Tasks</Link>
          </li>
        </menu>
        <Routes>
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/" element={<TasksPage tasks={tasks} />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
