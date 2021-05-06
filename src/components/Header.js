import React from "react";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const [, dispatch] = useAppContext();
  return (
    <header>
      <div className="container">
        <h1>Task Tracker</h1>
        <button onClick={() => dispatch({ type: "FORM_TOGGLE" })}>
          Add Task
        </button>
      </div>
    </header>
  );
};

export default Header;
