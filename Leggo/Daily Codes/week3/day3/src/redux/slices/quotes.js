import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes/5'

export const fetchQuotes = createAsyncThunk(
    'quotes/fetchQuotes', () => {
        return fetch(url)
            .then((response) => response.json())
            .catch((error) => console.log(error))
    }
)

export const quotesSlice = createSlice({
    name: "quotes",
    initialState: {
        list: ['Loading quotes...'],
        name: 'Ron Swanson',
        loading: 'Loading'
    },
    reducers: {
    },
    extraReducers: {
        [fetchQuotes.pending]: (state) => {
            state.loading = 'Loading'
        },
        [fetchQuotes.fulfilled]: (state, action) => {
            state.list = action.payload;
        },
        [fetchQuotes.rejected]: (state) => {
            state.loading = 'loading failed'
        },
    }
})
export const { addQuotes } = quotesSlice.actions;
export default quotesSlice.reducer;