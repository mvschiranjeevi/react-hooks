import React, { useReducer, useState } from "react";
import TodoList from "./TodoList";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  REMOVE_TODO: "remove-todo",
  TOGGLE_TODO: "toggle-todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.REMOVE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name, completed: false };
}

export default function Todo() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName("");
  };

  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoList
            key={todo.id}
            id={todo.id}
            todo={todo}
            dispatch={dispatch}
          />
        ))}
      </ul>
    </>
  );
}
