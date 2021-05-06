import React from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";
import { useAppContext } from "./contexts/AppContext";

function App() {
  const [{ showForm }] = useAppContext();

  return (
    <div className="App">
      <Header />
      <div className="container">
        {showForm ? <TaskForm /> : null}
        <Tasks />
      </div>
    </div>
  );
}

export default App;
