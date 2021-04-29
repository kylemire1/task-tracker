import React from "react";
import Task from "./Task";

const Tasks = ({ taskData, deleteTask, toggleComplete }) => {
  return (
    <div>
      {taskData.map((t) => {
        return (
          <Task
            key={t.id}
            task={t}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
