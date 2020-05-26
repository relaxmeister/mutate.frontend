import { combineReducers } from 'redux';
import jobReducer from './jobReducer';
import authReducer from './authReducer';
import placeholderReducer from './placeholderReducer';

export const rootReducer = combineReducers({
    job: jobReducer,
    auth: authReducer,
    placeholder2: placeholderReducer,
});