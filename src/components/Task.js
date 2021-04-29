import React from "react";
import { FaTimes, FaCheck, FaUndo } from "react-icons/fa";

const Task = ({ task, deleteTask, toggleComplete }) => {
  return (
    <div className="task">
      <div style={{ opacity: task.complete ? 0.5 : 1 }}>
        <h3 style={{ textDecoration: task.complete ? "line-through" : "none" }}>
          {task.name}
        </h3>
        <p>{task.complete ? "Complete" : "Not Complete"}</p>
      </div>
      <div>
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          <FaTimes style={{ color: "red" }} />
        </button>{" "}
        <button onClick={() => toggleComplete(task.id)}>
          {task.complete ? (
            <FaUndo style={{ color: "#333" }} />
          ) : (
            <FaCheck style={{ color: "green" }} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Task;
