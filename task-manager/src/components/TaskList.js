import react, { useState, useMemo } from "react";
import { useTaskContext } from "../context/useTaskContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useTaskContext();
  const pendingTasks = useMemo(
    () => tasks.filter((task) => !task.completed),
    [tasks]
  );
  console.log(pendingTasks);

  return (
    <>
      <h2>Pending Tasks ({pendingTasks.length})</h2>
      {pendingTasks.map((task) => (
        <Task id={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskList;
