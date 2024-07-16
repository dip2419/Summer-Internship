import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const name = "deep patel";
  const age = 22;

  return <AppContext.Provider value={{ name, age }}>
    {props.children}
  </AppContext.Provider>;
};

export default ContextProvider;
