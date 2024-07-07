import React, { useState, useRef, useLayoutEffect, useCallback } from "react";
import { useTaskContext } from "../context/useTaskContext";
import { ACTIONS } from "../utils/constants";

const TaskForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const inputRef = useRef(null);
  const { dispatch } = useTaskContext();

  useLayoutEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (name.trim() && description.trim()) {
        dispatch({
          type: ACTIONS.ADD,
          payload: { id: Date.now(), name, description, completed: false },
        });
        setName("");
        setDescription("");
      }
    },
    [name, description, dispatch]
  );

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task Name"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
