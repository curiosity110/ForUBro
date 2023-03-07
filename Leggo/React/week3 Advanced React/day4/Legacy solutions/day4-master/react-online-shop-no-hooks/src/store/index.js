import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// composeWithDevTools connects your app with the "Redux DevTools" chrome extension
// It is HIGHLY ADVISED that you install the "Redux DevTools" extension.
// The "Redux DevTools" extension itself: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
// The package you need to install to be able to use the extension: https://www.npmjs.com/package/redux-devtools-extension

// If you are NOT using thunk middleware, you can use the "Redux DevTools" with the following code (without having to install a package):
// const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default store;
