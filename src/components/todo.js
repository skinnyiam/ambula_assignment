import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Todo = () => {
  // Access the tasks, addTask, completeTask, removeTask, and completedTasks count from the context
  const { tasks, addTask, completeTask, removeTask, completedTasks } =
    useContext(AppContext);

  // State for the new task input
  const [newTask, setNewTask] = useState("");

  // Handle the form submission to create a new task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      return; // Do not create an empty task
    }
    addTask({ description: newTask, completed: false });
    setNewTask(""); // Clear the input field
  };

  // Handle marking a task as completed
  const handleCompleteTask = (index) => {
    completeTask(index);
  };

  // Handle removing a task from the list
  const handleRemoveTask = (index) => {
    removeTask(index);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed Tasks: {completedTasks}</p>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.description}
            {task.completed ? (
              <span> (Completed)</span>
            ) : (
              <>
                <button onClick={() => handleCompleteTask(index)}>
                  Complete
                </button>
                <button onClick={() => handleRemoveTask(index)}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
