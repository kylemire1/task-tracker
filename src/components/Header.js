import React from "react";

const Header = ({ toggleForm }) => {
  return (
    <header>
      <div className="container">
        <h1>Task Tracker</h1>
        <button onClick={toggleForm}>Add Task</button>
      </div>
    </header>
  );
};

export default Header;
