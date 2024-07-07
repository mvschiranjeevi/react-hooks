import React from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { TaskContextProvider } from "./context/useTaskContext";
import UseReduce from "./components/hook-different/UseReduce";
import Todo from "./components/Todo";

function App() {
  return (
    <TaskContextProvider>
      <div className="App">
        <h1>Task Manager</h1>
        <TaskForm />
        <TaskList />
        {/* <UseReduce /> */}
        {/* <Todo /> */}
      </div>
    </TaskContextProvider>
  );
}

export default App;
