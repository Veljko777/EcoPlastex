import _ from "lodash";
import { FETCH_POST, FETCH_POSTS, CREATE_CONTACT} from "../actions/types";

export default (state={}, action)=>{
    switch (action.type){
        case FETCH_POST:
            return {...state, [action.payload.id]:action.payload};
        case FETCH_POSTS:
            return {...state, ..._.mapKeys(action.payload,"id")};
        case CREATE_CONTACT:
            return {...state}
        default:
            return state;
    }
};