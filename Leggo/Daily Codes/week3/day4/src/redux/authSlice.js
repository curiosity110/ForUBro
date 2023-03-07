import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    token: undefined
}

const authSlice = createSlice({
    name:"token",
    initialState: initialState,
    reducers: {
        setToken: (state, action) => {
            const newState = {
                token: action.payload
            }
            return newState
        }
    }

})

const setTokenAction = authSlice.actions.setToken
const authReducer = authSlice.reducer

export {
    setTokenAction,
    authReducer
}

