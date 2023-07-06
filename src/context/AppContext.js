import React, { createContext, useState } from "react";

// Create a context to manage state
export const AppContext = createContext();

// Create a provider component to wrap the app and provide the context values
export const AppProvider = ({ children }) => {
  // State for to-do list
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState(0);

  // State for shopping cart
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // Add a new task to the to-do list
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Mark a task as completed
  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
    setCompletedTasks(completedTasks + 1);
  };

  // Remove a task from the to-do list
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    if (updatedTasks[index].completed) {
      setCompletedTasks(completedTasks - 1);
    }
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  // Add an item to the shopping cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartTotal(cartItems.length + 1);
  };

  // Remove an item from the shopping cart
  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    setCartTotal(cartItems.length - 1);
  };

  // Define the context values
  const contextValues = {
    tasks,
    completedTasks,
    addTask,
    completeTask,
    removeTask,
    cartItems,
    cartTotal,
    addToCart,
    removeFromCart,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
