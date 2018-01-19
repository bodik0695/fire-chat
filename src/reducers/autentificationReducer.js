import { createReducer } from 'redux-create-reducer';

import ActionTypes from '../actions/ActionTypes';

const initialState = {
    userName: ''
}

export const autentificationReducer = createReducer(initialState, {
    [ActionTypes.SAVE_USER_NAME]: (state, action) => ({
            ...state,
            userName: action.userName
        }),
    [ActionTypes.LOAD_USER_NAME]: (state, action) => ({
        userName: action.userName
    })
})
export default autentificationReducer;