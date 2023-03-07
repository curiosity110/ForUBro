import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./slices/questions";
import choicesReducer from "./slices/choices";

export default configureStore({
    reducer: {
        questions: questionsReducer,
        choices: choicesReducer
    }
});