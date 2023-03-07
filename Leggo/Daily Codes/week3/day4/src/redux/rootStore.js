import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./authSlice";


const rootStore = configureStore({
    reducer: {
        auth: authReducer
    }
})

export default rootStore