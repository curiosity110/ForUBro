import { createSlice } from '@reduxjs/toolkit'

export const invitesSlice = createSlice({
    name: 'invites',
    initialState: {
        invitedPeople: []
    },
    reducers: {
        invite: (state, action) => {
            if (!state.invitedPeople.includes(action.payload)) {
                state.invitedPeople.push(action.payload)
            }            
        }
    }
})

export const { invite } = invitesSlice.actions;
export default invitesSlice.reducer;