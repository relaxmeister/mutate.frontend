import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL
} from "../actions/types";

const INITIAL_STATE = {
  user: null,
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case REGISTER_USER:
      return { ...state, loading: true, error: "" };
    case REGISTER_USER_SUCCESS:
      console.log("WOOO!")
      return { ...state, ...INITIAL_STATE, user: action.payload, loading: false };
    case REGISTER_USER_FAIL:
      return { ...state, error: "Authentication Failed.", loading: false };
    case LOGIN_USER:
      return { ...state, loading: true, error: "" };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload, loading: false };
    case LOGIN_USER_FAIL:
      return { ...state, error: "Authentication Failed.", loading: false };
    case LOGOUT_USER:
      return { ...state, user: null, error: "" }
    default:
      return state;
  }
};
