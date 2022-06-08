const initState = {
    token: null
  };
  
  export const LoginReducer = (state = initState, { type, payload }) => {
    switch (type) {
      case "LOGIN_TOKEN":
        return { ...state, token: payload };
      default:
        return state;
    }
  };