export function Task({ todo, id }) {
  const priorityMap = {
    0: "💀",
    1: "🍊",
    2: "🍎",
  };
  return (
    <li style={{ fontSize: "1.5rem" }}>
      {priorityMap[Math.round(id * Math.random() * 100) % 3]} {todo}
    </li>
  );
}
