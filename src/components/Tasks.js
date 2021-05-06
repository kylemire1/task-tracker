import React from "react";
import { useAppContext } from "../contexts/AppContext";
import Task from "./Task";

const Tasks = () => {
  const [{ currentTasks }] = useAppContext();
  return (
    <div>
      {currentTasks.map((t) => {
        return <Task key={t.id} task={t} />;
      })}
    </div>
  );
};

export default Tasks;
