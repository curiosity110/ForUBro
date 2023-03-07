import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from './slices/quotes'

export default configureStore({
    reducer: {
        quotes: quotesReducer,
    }
});