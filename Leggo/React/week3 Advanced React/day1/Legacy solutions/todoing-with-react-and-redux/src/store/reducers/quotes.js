import { UPDATE_QUOTE } from '../types';

const initialState = 'Fetching...'

const changeQuote = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_QUOTE: {
            return action.data;
        }
        default:
            return state;
    }
}

export default changeQuote;
