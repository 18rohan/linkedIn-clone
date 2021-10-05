import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

// Import Combined Reducers
import rootReducer from "./reducers/index";
const middlewares = [logger, thunkMiddleware];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistStor = persistStore(store);
const exporter = { store, persistStor };
export default exporter;
