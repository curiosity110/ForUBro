import { ADD_ITEMS } from '../actionTypes';
import { generateFakeItems } from '../../helpers/mockup';

export const addItems = amount => {
    const items = generateFakeItems(amount);
    return {
        type: ADD_ITEMS,
        payload: { items }
    };
};

/*

// Mockup how a "real" shop might fetch data from the internet inside a "thunk"
// NOTE: This is not a real API and the example is not functioning
export const addItems = items => {
    return {
        type: ADD_ITEMS,
        payload: { items }
    };
};

export const fetchItems = () => async (dispatch, getState) {
    try {
        const response = await fetch('https://some-shop/api/items/');
        const data = await response.json();
        dispatch(addItems(data.items))
    } catch(error) {
        console.log("something went wrong");
    }
}


*/
