import { createStore } from 'redux';

import contactBookReducer from './reducers/contactBookReducer';

const store = createStore(
    contactBookReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
