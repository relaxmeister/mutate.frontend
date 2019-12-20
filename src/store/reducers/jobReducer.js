import { 
    JOBS_FETCH_SUCCESS,
    JOBS_FETCH_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
    jobs: null,
    loading: true,
    error: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case JOBS_FETCH_SUCCESS:
            return { ...state, ...INITIAL_STATE, jobs: action.payload /*[{role: "design"}, {role: "design"}]*/, loading: false };
        case JOBS_FETCH_FAIL:
            return { ...state, error: 'Jobfetching Failed.' };
        default:
            return state;
    }
};