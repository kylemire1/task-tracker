import React, { useState } from "react";

const TaskForm = ({ addTask, toggleForm }) => {
  const [nameValue, setNameValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.currentTarget;
    setNameValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addTask(nameValue);
    setNameValue("");
    toggleForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">Task Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={nameValue}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <button type="submit">Submit Task</button>
      </div>
    </form>
  );
};

export default TaskForm;
