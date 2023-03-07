import { combineReducers } from 'redux';
import { SET_QUESTIONS, ADD_CHOICE, RESET_CHOICES } from './actionTypes';

// For larger projects you would create a folder called "reducers" under src/store/reducers/
// and put each reducer in seperate files (questions.js and choices.js in this case )
// in the index.js inside the "reducers" folder, you import questions and choices and export the combined rootReducer

// One reducer for questions
const questions = (questions = [], action) => {
    switch (action.type) {
        case SET_QUESTIONS: {
            return action.payload.questions;
        }
        default: {
            return questions;
        }
    }
};

// another reducer for choices
const choices = (choices = [], action) => {
    switch (action.type) {
        case ADD_CHOICE: {
            // alternative:
            // const choicesCopy = [...choices];
            // choicesCopy.push(action.payload.choice);
            // return choicesCopy;

            // doing the above in one line:
            return choices.concat(action.payload.choice);
        }

        case RESET_CHOICES:
            return [];

        default:
            return choices;
    }
};

// one reducer to rule them all
const rootReducer = combineReducers({
    questions,
    choices
});

export default rootReducer;
