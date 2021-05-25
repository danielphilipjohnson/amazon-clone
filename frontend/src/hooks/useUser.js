import React from "react";

import { UserContext } from "../context/user-context";

function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
}
export default useUser;
