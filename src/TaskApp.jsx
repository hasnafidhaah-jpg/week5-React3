import { useState } from "react";
function TaskApp() {
  // State Parent il - Closest Common Parent
  const [tasks, setTasks] = useState([
    { id: 1, name: " study React ", done: false },
    { id: 2, name: "Project completion", done: false },
  ]);

  // Task update cheyyan 
  function toggleTask(id) {
    // Immutably update 
    const newTasks = tasks.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    setTasks(newTasks);
  }

  const doneCount = tasks.filter((t) => t.done).length;

  return (
    <div>
      {/* Task List */}
      {tasks.map((t) => (
        <div key={t.id}>
          <input 
            type="checkbox" 
            checked={t.done} 
            onChange={() => toggleTask(t.id)} 
          />
          {t.name}
        </div>
      ))}

      {/* Summary - Same state  */}
      <h3>{doneCount} / {tasks.length} Completed</h3>
    </div>
  );
}
export default TaskApp;