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
    default: {
      return state;
    }
  }
}

export default AuthReducer;
