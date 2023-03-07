import { combineReducers } from 'redux';

import todoReducer from './todos';
import filter from './filter';
import changeQuote from './quotes';

const reducers = combineReducers({
    todoReducer,
    filter,
    changeQuote
});

export default reducers;
