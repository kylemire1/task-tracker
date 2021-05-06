import { createContext, useReducer, useContext } from "react";
import { reducer, INITIAL_STATE } from "./appContextReducer";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [currentTasks, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <AppContext.Provider value={[currentTasks, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
