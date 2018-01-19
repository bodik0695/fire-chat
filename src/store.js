import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import {reducer} from './reducers/index';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware,
            apiMiddleware,
        )
    )
);

export default store;