import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        selected: 'all',
    },
    reducers: {
        change_filter: (state, action) => {
            state.selected = action.payload;
        },
    }
})

export const { change_filter } = filterSlice.actions;

export default filterSlice.reducer;