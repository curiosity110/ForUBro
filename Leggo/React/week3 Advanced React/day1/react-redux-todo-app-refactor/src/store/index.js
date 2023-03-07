import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filter";
import quoteReducer from "./slices/quote";
import todosReducer from "./slices/todos";


export default configureStore({
    reducer: {
        todos: todosReducer,
        quote: quoteReducer,
        filter: filterReducer,
    }
});