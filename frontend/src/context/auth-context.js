import React from "'react";

const AuthContext = React.createContext({
  user: { identifier: "", token: "", name: "" },
});
AuthContext.displayName = "AuthContext";
const AuthProvider = ({ user, ...props }) => (
  <AuthContext.Provider value={user} {...props} />
);

function useAuth() {
  return React.useContext(AuthContext);
}

export { AuthProvider, useAuth };
