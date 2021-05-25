function userReducer(state, action) {
  switch (action.type) {
    case "start update": {
      console.log("start update called");
      return {
        ...state,
        token: null,
        user: { ...state.user, ...action.updates },
        status: "pending",
        storedUser: state.user,
      };
    }
    case "finish update": {
      return {
        ...state,
        user: action.updatedUser,
        status: "resolved",
        storedUser: null,
        error: null,
      };
    }
    case "set token": {
      return {
        ...state,
        token: action.jwt,
        status: "resolved",
        storedUser: null,
        error: null,
      };
    }
    case "remove token": {
      return {
        ...state,
        token: null,
      };
    }
    case "fail update": {
      console.log("fail update called");
      return {
        ...state,
        status: "rejected",
        error: action.error,
        user: state.storedUser,
        storedUser: null,
        token: null,
      };
    }
    case "reset": {
      return {
        ...state,
        status: null,
        error: null,
        token: null,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default userReducer;
