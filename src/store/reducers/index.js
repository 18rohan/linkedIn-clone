// Import Redux Packages
import {combineReducers} from 'redux';

// Import Reducers
import UserReducer from './user-reducers';


const rootReducer = combineReducers({
	userState:UserReducer,
})

export default rootReducer;
