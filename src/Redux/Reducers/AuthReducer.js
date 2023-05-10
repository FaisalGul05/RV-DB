// user management

export const IS_SIGNEDIN = "IS_SIGNEDIN";

const initial_state = {
  isSignedIn: false,
};

const AuthReducer = (state = initial_state, action) => {
  switch (action.type) {
    case IS_SIGNEDIN:
      return {
        ...state,
        isSignedIn: action.payload,
      };

    default: {
      return state;
    }
  }
};
export default AuthReducer;
