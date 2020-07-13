import {
  JOBS_FETCH_SUCCESS,
  JOBS_FETCH_FAIL,
  JOBS_DELETE,
  JOBS_ADD,
  JOBS_MODIFY
} from "../actions/types";

const INITIAL_STATE = {
  jobs: [],
  loading: true,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case JOBS_FETCH_SUCCESS:
      return {
        ...state,
        //...INITIAL_STATE,
        jobs: action.payload /*[{role: "design"}, {role: "design"}]*/,
        loading: false
      };
    case JOBS_FETCH_FAIL:
      return { ...state, error: "Jobfetching Failed." };
    case JOBS_DELETE:
      return {
        ...state,
        jobs: state.jobs.filter(e => e.id !== action.payload)
      };
    case JOBS_ADD:
      return {
        ...state,
        jobs: state.jobs.concat(action.payload)
      };
    case JOBS_MODIFY:
      return {
        ...state,
        jobs: state.jobs.map(e =>
          e.id === action.payload.id ? action.payload : e
        )
      };
    default:
      return state;
  }
};
