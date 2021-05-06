import { v4 } from "uuid";

export const INITIAL_STATE = {
  currentTasks: [
    { id: 1, name: "Take out the trash", complete: true },
    { id: 2, name: "Buy groceries", complete: false },
    { id: 3, name: "Clean the house", complete: false },
  ],
  showForm: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "TASK_ADD":
      const newTask = {
        id: v4(),
        name: action.payload,
        complete: false,
      };
      return {
        ...state,
        currentTasks: [...state.currentTasks, newTask],
      };

    case "TASK_TOGGLE":
      const updatedTaskList = state.currentTasks.map((t) => {
        if (t.id !== action.payload) {
          return t;
        }

        return {
          ...t,
          complete: !t.complete,
        };
      });

      return {
        ...state,
        currentTasks: updatedTaskList,
      };

    case "TASK_DELETE":
      const newTaskList = state.currentTasks.filter((t) => {
        return t.id !== action.payload;
      });

      return {
        ...state,
        currentTasks: newTaskList,
      };

    case "FORM_TOGGLE":
      return {
        ...state,
        showForm: !state.showForm,
      };

    default:
      return state;
  }
};
