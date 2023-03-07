import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
    name: "quote",
    initialState: {
        text: 'Fetching...'
    },
    reducers: {
        update_quote: (state, action) => {
            state.text = action.payload;
        }

    }
})

export const { update_quote } = quoteSlice.actions;

export default quoteSlice.reducer;