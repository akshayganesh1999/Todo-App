import React, { useState, useEffect } from "react";
import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <div className="app-container">
        <h1>To-Do App</h1>
        <TaskInput addTask={addTask} />
        <TaskList
          tasks={tasks}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      </div>
    </>
  )
}

export default App
