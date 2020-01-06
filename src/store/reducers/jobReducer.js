import { 
    JOBS_FETCH_SUCCESS,
    JOBS_FETCH_FAIL,
    FILTER_BY_FIELD,
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
        case FILTER_BY_FIELD: //fungerar som delete
            return { ...state, jobs: state.jobs.filter(e => e.field === action.payload)}; // behåller vad som har samma namn, fortf delete dock
            //[{ id: 1, role: "Senior UI/UX Designer", field: "Design" }]}
            //...state.jobs.filter(e => e.id !== 3)};//state.filter(e => e === action.payload); // behållar samma namn
        default:
            return state;
    }
};