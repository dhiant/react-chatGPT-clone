import { createContext, useEffect, useReducer } from "react";
import reducer from "./AuthReducer";

const initialState = {
  // currentUser must be object so JSON string must be parsed into JS object
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // need to convert JS object to string to store in localStorage
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
