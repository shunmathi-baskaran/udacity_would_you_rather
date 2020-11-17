export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER'


export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addQuestionToUser(user,qnId) {
    return {
        type: ADD_QUESTION_TO_USER,
        user,
        qnId
    }
}

export function handleAddQuestionToUser(qnId) {
    return (dispatch, getState) => {
        const {authedUser,users} = getState();
        const user = users[authedUser]
        return dispatch(addQuestionToUser(user,qnId))
    }
}


export function addAnswerToUser(user,qId, value) {
    return {
        type: ADD_ANSWER_TO_USER,
        user,
        qId,
        value
    }
}

export function handleAddAnswerToUser(qnId, value) {
    return (dispatch, getState) => {
        const {authedUser,users} = getState();
        const user = users[authedUser]
        return dispatch(addAnswerToUser(user,qnId,value))
    }
}