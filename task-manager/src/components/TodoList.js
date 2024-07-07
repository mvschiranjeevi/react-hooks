import React from "react";
import { ACTIONS } from "./Todo";

function TodoList({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.completed ? "green" : "red" }}>
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
}

export default TodoList;
