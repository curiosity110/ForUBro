import { createSlice } from "@reduxjs/toolkit";

export const choicesSlice = createSlice({
    name: 'choices',
    initialState: {
        list: []
    },
    reducers: {
        add_choice: (state, action) => {
            state.list.push(action.payload);
        },
        reset_choices: (state) => {
            state.list = []
        }
    }
})

export const { add_choice, reset_choices } = choicesSlice.actions;

export default choicesSlice.reducer;