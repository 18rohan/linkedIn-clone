import { SET_USER, LOGOUT_USER } from "../actions/actionTypes";

const initial_state = {
  user: null,
};

const userReducer = (state = initial_state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case LOGOUT_USER:
      localStorage.removeItem("useState");
      return {
        user: initial_state,
      };
    default:
      return state;
  }
};

export default userReducer;
