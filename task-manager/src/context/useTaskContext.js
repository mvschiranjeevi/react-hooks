import React, { createContext, useReducer, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { ACTIONS } from "../utils/constants";

// Create context
const TaskContext = createContext();

// Reducer function
const taskReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.payload];
    case ACTIONS.REMOVE:
      return state.filter((task) => task.id !== action.payload);
    case ACTIONS.TOGGLE:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    case ACTIONS.SET:
      return action.payload;
    default:
      return state;
  }
};

// Context provider component
export const TaskContextProvider = ({ children }) => {
  const [storedTasks, setStoredTasks] = useLocalStorage("tasks", []);
  const [tasks, dispatch] = useReducer(taskReducer, storedTasks);

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks, setStoredTasks]);

  useEffect(() => {
    dispatch({ type: ACTIONS.SET, payload: storedTasks });
  }, [storedTasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use the TaskContext
export const useTaskContext = () => useContext(TaskContext);
