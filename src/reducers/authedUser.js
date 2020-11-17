import {RESET_AUTHED_USER, SET_AUTHED_USER} from '../actions/authedUser'


export default function setAuthedUser (state=null, action) {
    switch(action.type) {
        case SET_AUTHED_USER: return action.userId;
        case RESET_AUTHED_USER: return action.userId
        default: return state;
    }
}