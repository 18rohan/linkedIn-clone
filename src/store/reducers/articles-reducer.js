import {
  SET_LOADING_STATE,
  GET_ARTICLES,
  SET_LIKES,
  LIKE_A_POST,
} from "../actions/actionTypes";

// Import Utils
import { LikePost } from "../../utils/likes.utils.js";
export const initial_state = {
  articles: [],
  loading: false,
};

export const ArticleReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    // case LIKE_A_POST:
    //   return {
    //     ...state,
    //
    //     articles: LikePost(state.articles, action.payload.user_id),
    //   };
    // case SET_LIKES:
    //   return {
    //     ...state,
    //     likes: action.likes,
    //   };
    case SET_LOADING_STATE:
      return {
        ...state,
        loading: action.status,
      };

    default:
      return state;
  }
};
