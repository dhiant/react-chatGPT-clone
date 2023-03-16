function AuthReducer(state, action) {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case "SIGNUP": {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case "LOGOUT": {
      return {
        currentUser: "",
      };
    }
    default: {
      return state;
    }
  }
}

export default AuthReducer;
