import {SET_USER} from '../actions/actionTypes';


const initial_state = {
	user:null,
}

const userReducer = (state = initial_state, action) =>{
	switch(action.type){
		case SET_USER:
			return {
				...state,
				user:action.user
			}
		default: 
			return state;
	}
}

export default userReducer;