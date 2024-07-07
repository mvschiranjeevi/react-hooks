import React from "react";
import { useTaskContext } from "../context/useTaskContext";
import { ACTIONS } from "../utils/constants";

const Task = ({ task }) => {
  const { dispatch } = useTaskContext();

  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <span>{task.name}</span>
      <span>{task.description}</span>
      <div>
        <button
          onClick={() => dispatch({ type: ACTIONS.TOGGLE, payload: task.id })}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => dispatch({ type: ACTIONS.REMOVE, payload: task.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
