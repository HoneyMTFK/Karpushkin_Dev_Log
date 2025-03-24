import { createContext, ReactNode, useReducer } from "react";
import { ACTION, innitialState, listReducer, TASK } from "./reducer";

export const ListContext = createContext<TASK[] | undefined>(undefined);
export const ListDispatchContext = createContext<
  React.ActionDispatch<[action: ACTION]> | undefined
>(undefined);

export const ListProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, dispatch] = useReducer(listReducer, innitialState);

  return (
    <ListContext.Provider value={tasks}>
      <ListDispatchContext.Provider value={dispatch}>
        {children}
      </ListDispatchContext.Provider>
    </ListContext.Provider>
  );
};