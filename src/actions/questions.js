import {_saveQuestion, _saveQuestionAnswer} from '../utils/_DATA'
import { handleAddQuestionToUser, handleAddAnswerToUser} from './users'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}


function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText,optionTwoText) {
    return (dispatch, getState) => {
        const {authedUser} = getState();
        let qn = {}
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author : authedUser
        }).then((question) => {
            dispatch(addQuestion(question))
            qn = question})
        .then(() => dispatch(handleAddQuestionToUser(qn.id)))
    }
}



function answerQuestion(authedUser, question ,value) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        question,
        value
    }
}

export function handleAnswerQuestion(qnId, value) {
    return (dispatch, getState) => {
        const {authedUser, questions} = getState();
        const question = questions[qnId]
        return _saveQuestionAnswer({
            authedUser,
            qid: qnId,
            answer: value
        }).then(() => dispatch(answerQuestion(authedUser, question, value)))
        .then(() => dispatch(handleAddAnswerToUser(qnId, value)))
    }
}