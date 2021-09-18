// Import Redux Packages
import {combineReducers} from 'redux';

// Import Reducers
import UserReducer from './user-reducers';
import {ArticleReducer} from './articles-reducer';


const rootReducer = combineReducers({
	userState:UserReducer,
	articleState: ArticleReducer
})

export default rootReducer;
