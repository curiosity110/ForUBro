import { set_questions } from './slices/questions';

// For larger projects you would create a folder called "actions" under src/store/actions/
// and group related ActionCreators & Thunks in seperate files.

// For example You could have a questionsActions.js and a choicesActions.js file
// If you need "fetchQuestions" you would then just import fetchQuestions from './store/actions/questionsActions.js' and so on.

/***********************/
/*** ActionCreators ***/
/***********************/

// Remember: an action creator is just a function that returns an action

/**************/
/*** Thunks ***/
/**************/

// "Thunks are the recommended middleware for basic Redux side effects logic,
// including complex synchronous logic that needs access to the store,
// and simple async logic like AJAX requests." - https://github.com/reduxjs/redux-thunk

// "Redux Thunk middleware allows you to write action creators that return a function instead of an action.
// The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
// The inner function receives the store methods dispatch and getState as parameters." - https://github.com/reduxjs/redux-thunk

export const fetchQuestions = amount => (dispatch, getState) => {
    return fetch(`https://opentdb.com/api.php?amount=${amount}`)
        .then(res => res.json())
        .then(data => {
            dispatch(set_questions(data.results));
        });
};

// // Exact same thunk as above but using async/await syntax instead of .then()
// export const fetchQuestions = (amount) => async (dispatch, getState) => {
//     const res = await fetch(`https://opentdb.com/api.php?amount=${amount}`);
//     const data = await res.json();
//     dispatch(addQuestions(data.results));
// }
