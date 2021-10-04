import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

// Import Combined Reducers
import rootReducer from "./reducers/index";
const middlewares = [logger, thunkMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
