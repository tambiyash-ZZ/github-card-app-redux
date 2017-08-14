import allReducers from '../reducers/index';
import {createStore} from 'redux';

let store = createStore(allReducers);
export default store;