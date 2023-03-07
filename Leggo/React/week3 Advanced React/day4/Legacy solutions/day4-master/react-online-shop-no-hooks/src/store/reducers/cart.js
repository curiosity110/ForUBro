import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from '../actionTypes';

const initialState = {};

const cart = (cart = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const { id, amount = 1 } = action.payload;
            let cartCopy = { ...cart };

            // different behaviour depending on if item was already in cart
            if (cartCopy[id]) {
                const newAmount = cartCopy[id].amount + amount;
                cartCopy[id] = { ...cartCopy[id], amount: newAmount };
            } else {
                cartCopy[id] = { id, amount };
            }
            return cartCopy;
        }

        case REMOVE_FROM_CART: {
            const { id, amount = 1 } = action.payload;

            if (cart[id]) {
                const cartCopy = { ...cart };
                // decrement amount, delete when zero
                if (cartCopy[id].amount - amount > 0) {
                    const newAmount = cartCopy[id].amount - amount;
                    cartCopy[id] = { ...cartCopy[id], amount: newAmount };
                } else {
                    delete cartCopy[id];
                }
                return cartCopy;
            }
            return cart;
        }

        case EMPTY_CART:
            return [];

        default:
            return cart;
    }
};

export default cart;
