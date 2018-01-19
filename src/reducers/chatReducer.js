import { createReducer } from 'redux-create-reducer';

import ActionTypes from '../actions/ActionTypes';

const initialState = {
    messages: []
}

export const chatReducer = createReducer(initialState, {
    [ActionTypes.ADD_MESSAGE]: (state, action) => ({
        ...state,
        messages: [
            ...state.messages,
            {
                message: action.message
            }
        ]
    }),
    [ActionTypes.LOAD_MESSAGES]: (state, action) => ({
        ...state,
        messages: action.messages
        
    }),
})
export default chatReducer;