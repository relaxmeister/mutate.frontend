import { combineReducers } from 'redux';
import jobReducer from './jobReducer';
import authReducer from './authReducer';

export const rootReducer = combineReducers({
    job: jobReducer,
    auth: authReducer,
});