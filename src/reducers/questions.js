import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions';

export default function receiveQuestions(state={}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS: return {
            ...state,
            ...action.questions
        }
        case ADD_QUESTION :  const { question } = action;
        return {
            ...state,
            [question.id]: question,
        }

        case ANSWER_QUESTION : const { authedUser, value } = action;
        const qn = action.question;
        let option = {
            [qn.id]: {
                ...state[qn.id],
                [value]: {
                text: state[qn.id][value].text,
                votes: state[qn.id][value].votes.concat([authedUser])
                }
            }
            }
        return {
            ...state,
            [qn.id]: qn,
            ...option
        }
        default : return state
    }
}