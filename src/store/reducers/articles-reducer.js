import {SET_LOADING_STATE, GET_ARTICLES, LIKE_A_POST} from '../actions/actionTypes';

export const initial_state = {
  articles:[],
  loading:false
}

export const ArticleReducer = (state=initial_state, action) =>{
  switch(action.type){
    case GET_ARTICLES:
      return {
        ...state,
        articles:action.payload
      }
    
    case SET_LOADING_STATE:
      return {
        ...state,
        loading:action.status
      }
    default:
      return state;
  }
}
