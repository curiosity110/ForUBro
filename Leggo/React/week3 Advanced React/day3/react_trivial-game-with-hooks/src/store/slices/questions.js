import { createSlice } from "@reduxjs/toolkit";

export const questionsSlice = createSlice({
    name: 'questions',
    initialState: {
        list: []
    },
    reducers: {
        set_questions: (state, action) => {
            state.list = action.payload;
        }
    }
})

export const { set_questions } = questionsSlice.actions;

export default questionsSlice.reducer;