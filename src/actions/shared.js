import { receiveQuestions } from './questions'
import { receiveUsers } from './users'
import { _getUsers, _getQuestions } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
         Promise.all([_getUsers(), _getQuestions()])
        .then((result) => {
                    dispatch(receiveUsers(result[0]))
                    dispatch(receiveQuestions(result[1]))
                    dispatch(hideLoading())
        })
    }
}