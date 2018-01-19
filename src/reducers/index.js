import { combineReducers } from 'redux';

import { chatReducer } from './chatReducer.js'
import { autentificationReducer } from './autentificationReducer.js'

export const reducer = combineReducers({
    chat: chatReducer,
    autentification: autentificationReducer
});