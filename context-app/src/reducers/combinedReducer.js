import { combineReducers } from 'redux';
import clientReducer from './clientReducer';

// this structure will allow us to have mutiple
// reducers, and logical divisions of the data
// that we get from the back-end
export default combineReducers({
    clients: clientReducer,
});
