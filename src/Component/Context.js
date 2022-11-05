import { initialstate, reducer } from "./UseReducer";
import react, {createContext,useReducer,} from "react";
export const UserContext = createContext(initialstate);

export default function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
