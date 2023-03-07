import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter'
import invitesReducer from './slices/invites'

export default configureStore({
    reducer: {
        counter: counterReducer,
        invites: invitesReducer,
    }
})