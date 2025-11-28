import { useState } from 'react'
import './App.css'
import TaskList from "./Tasklist.jsx"

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  return (
    <>
      <div className="todo-container">
        <h1>Smart To-Do List</h1>

        <TaskList onAddTask={setNewTask} />

        <button 
          onClick={() => { 
            setTasks([...tasks, { text: newTask, completed: false }]); 
            setNewTask(""); 
          }}
        >
          Add Task
        </button>

        {tasks.map((task, index) => (
          <ul key={index}>

            <input 
              type="checkbox"
              checked={task.completed}
              onChange={() => {
                const updated = tasks.map((t, i) => {
                  if (i === index) {
                    return { ...t, completed: !t.completed };
                  }
                  return t;
                });

                setTasks(updated);
              }}
            />

            <span>{task.text}</span>

            <button 
              onClick={() => {
                const filtered = tasks.filter((_, i) => i !== index);
                setTasks(filtered);
              }}
            >
              Delete
            </button>
          </ul>
        ))}

        <h2>Task Completed: {tasks.filter(t => t.completed).length}</h2>
      </div>
    </>
  );
}

export default App;



