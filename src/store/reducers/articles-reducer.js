import {
  SET_LOADING_STATE,
  GET_ARTICLES,
  SET_LIKES,
} from "../actions/actionTypes";

export const initial_state = {
  articles: [],
  loading: false,
  likes: [],
};

export const ArticleReducer = (state = initial_state, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case SET_LIKES:
      return {
        ...state,
        likes: action.likes,
      };
    case SET_LOADING_STATE:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};
