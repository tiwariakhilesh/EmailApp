import {combineReducers} from 'redux';
import authReducer from './authreducer';
import surveyReducer from './surveyreducer';

export default combineReducers({
    auth: authReducer,
    survey:surveyReducer
});