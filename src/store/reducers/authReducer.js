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
  user: JSON.parse(localStorage.getItem("user")),
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case REGISTER_USER:
      return { ...state, loading: true, error: "" };
    case REGISTER_USER_SUCCESS:
      console.log("WOOO!");
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
        loading: false
      };
    case REGISTER_USER_FAIL:
      return { ...state, error: "Authentication Failed.", loading: false };
    case LOGIN_USER:
      return { ...state, loading: true, error: "" };
    case LOGIN_USER_SUCCESS:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
        loading: false
      };
    case LOGIN_USER_FAIL:
      return { ...state, error: "Authentication Failed.", loading: false };
    case LOGOUT_USER:
      localStorage.removeItem("user");
      return { ...state, user: null, error: "" };
    default:
      return state;
  }
};
