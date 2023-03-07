import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from '../actionTypes';

export const addToCart = (id, amount) => {
    return {
        type: ADD_TO_CART,
        payload: { id, amount }
    };
};

export const removeFromCart = (id, amount) => {
    return {
        type: REMOVE_FROM_CART,
        payload: { id, amount }
    };
};

export const emptyCart = () => {
    return {
        type: EMPTY_CART,
        payload: ''
    };
};
