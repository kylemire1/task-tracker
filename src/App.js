import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

const taskData = [
  { id: 1, name: "Take out the trash", complete: true },
  { id: 2, name: "Buy groceries", complete: false },
  { id: 3, name: "Clean the house", complete: false },
];

function App() {
  const [currentTasks, setCurrentTasks] = useState(taskData);
  const [showForm, setShowForm] = useState(false);

  const addTask = (name) => {
    const newTask = {
      id: v4(),
      name,
      complete: false,
    };

    setCurrentTasks([...currentTasks, newTask]);
  };

  const toggleComplete = (id) => {
    const updatedTaskList = currentTasks.map((t) => {
      if (t.id !== id) {
        return t;
      }

      return {
        ...t,
        complete: !t.complete,
      };
    });

    setCurrentTasks(updatedTaskList);
  };

  const deleteTask = (id) => {
    const newTaskList = currentTasks.filter((t) => {
      return t.id !== id;
    });
    setCurrentTasks(newTaskList);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <Header toggleForm={toggleForm} />
      <div className="container">
        {showForm ? (
          <TaskForm addTask={addTask} toggleForm={toggleForm} />
        ) : null}

        <Tasks
          taskData={currentTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default App;
