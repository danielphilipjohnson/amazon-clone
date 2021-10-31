import React from "react";

// find a way to add more fields remotely
const AuthContext = React.createContext({
  user: { email: "", username: "" },
});
AuthContext.displayName = "AuthContext";
const AuthProvider = ({ user, ...props }) => (
  <AuthContext.Provider value={user} {...props} />
);

function useAuth() {
  return React.useContext(AuthContext);
}

export { AuthProvider, useAuth };
