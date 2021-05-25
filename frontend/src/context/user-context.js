import React from "'react";
import { useAuth } from "./auth-context";

const UserContext = React.createContext();
UserContext.displayName = "UserContext";

// user reducer

function UserProvider({ children }) {
  const { user } = useAuth();
  const [state, dispatch] = React.useReducer(userReducer, {
    status: null,
    error: null,
    storedUser: user,
    user,
  });
  const value = [state, dispatch];
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
