export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const RESET_AUTHED_USER = 'RESET_AUTHED_USER';

export function setAuthedUser(userId) {
    return {
        type: SET_AUTHED_USER,
        userId
    }
}

export function resetAuthedUser() {
    return {
        type: RESET_AUTHED_USER,
        userId: null
    }
}
