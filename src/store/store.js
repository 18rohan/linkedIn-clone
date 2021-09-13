import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';


// Import Combined Reducers
import rootReducer from './reducers/index';

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));
export default store;