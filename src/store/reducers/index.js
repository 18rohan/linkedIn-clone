// Import Redux Packages
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Import Reducers
import UserReducer from "./user-reducers";
import { ArticleReducer } from "./articles-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userState", "articleState"],
};
const rootReducer = combineReducers({
  userState: UserReducer,
  articleState: ArticleReducer,
});

export default persistReducer(persistConfig, rootReducer);
