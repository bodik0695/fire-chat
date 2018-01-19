import { ActionTypes } from './ActionTypes'

export const saveUserName = ({userName}) => dispatch => {
    localStorage.setItem('UserName', `${String(userName)}`);

    return dispatch({
        type: ActionTypes.SAVE_USER_NAME,
        userName
    });
}

export const loadUserName = () => dispatch => {
    let userName = localStorage.getItem('UserName');

    if (userName) {
        return dispatch({
            type: ActionTypes.LOAD_USER_NAME,
            userName
        });
    }
}

export const addMessage = ({ message }) => dispatch => dispatch({
    type: ActionTypes.ADD_MESSAGE,
    message
});

export const loadMessages = () => (dispatch, getState) => {
    let { messages } = getState().chat;

    if (messages) {
        return dispatch({
            type: ActionTypes.LOAD_MESSAGES,
            messages
        });
    }
}
