import React, { useState } from "react";
import { useAppContext } from "../contexts/AppContext";

const TaskForm = () => {
  const [nameValue, setNameValue] = useState("");
  const [, dispatch] = useAppContext();

  const handleChange = (event) => {
    const { value } = event.currentTarget;
    setNameValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: "TASK_ADD",
      payload: nameValue,
    });
    setNameValue("");
    dispatch({ type: "FORM_TOGGLE" });
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
