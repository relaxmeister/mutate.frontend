import { combineReducers } from 'redux';
import jobReducer from './jobReducer';
import placeholderReducer from './placeholderReducer';

export const rootReducer = combineReducers({
    job: jobReducer,
    placeholder2: placeholderReducer,
});