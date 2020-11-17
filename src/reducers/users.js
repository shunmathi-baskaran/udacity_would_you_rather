import {RECEIVE_USERS, ADD_QUESTION_TO_USER, ADD_ANSWER_TO_USER} from '../actions/users';


export default function receiveUsers(state={}, action) {
    switch(action.type) {
        case RECEIVE_USERS: return {
            ...state,
            ...action.users
        }
        case ADD_QUESTION_TO_USER: 
        console.log(state);
        const {user, qnId} = action;
        let questions = {
            [user.id]: {
                ...state[user.id],
                questions: state[user.id].questions.concat([qnId])
                }
            }
        return {
            ...state,
            [action.user.id]: action.user,
            ...questions
        }


        case ADD_ANSWER_TO_USER : const {qId, value} = action;
        const answeredUser = action.user;
        let ans = {
            [answeredUser.id]: {
                ...state[answeredUser.id],
                answers:{
                    ...state[answeredUser.id].answers,
                    [qId]: value
                }
                }
            }
        return {
            ...state,
            [answeredUser.id]: answeredUser,
            ...ans
        }
        default: return state;
    }
}