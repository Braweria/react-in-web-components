import { Task } from "./Task";

export function TasksPage({ tasks }) {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id + Math.random()} {...task} />
        ))}
      </ul>
    </>
  );
}
