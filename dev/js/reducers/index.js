import {combineReducers} from 'redux';
import MemberDetailsReducer from './reducer-member-details';

const allReducers = combineReducers({
    memberDetails: MemberDetailsReducer
});

export default allReducers;
