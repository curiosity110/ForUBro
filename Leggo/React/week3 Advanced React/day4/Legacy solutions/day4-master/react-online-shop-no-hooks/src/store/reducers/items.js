import { ADD_ITEMS } from '../actionTypes';

const initialItems = {};

const items = (items = initialItems, action) => {
    switch (action.type) {
        case ADD_ITEMS: {
            return { ...items, ...action.payload.items };
        }
        default: {
            return items;
        }
    }
};

export default items;
