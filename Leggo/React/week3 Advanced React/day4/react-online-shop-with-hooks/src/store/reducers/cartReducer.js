import { createSlice } from "@reduxjs/toolkit";

const calcTotalCart = (state) =>
  (state.cartTotal = state.items.reduce((total, item) => {
    return total + item.total;
  }, 0))

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartTotal: 0,
  },

  reducers: {
    add_to_cart: (state, action) => {
      const newCartItem = {
        id: action.payload.id,
        title: action.payload.item,
        price: action.payload.price,
        quantity: 1,
      };

      let itemInCart = state.items.some(
        (item) => item.id === newCartItem.id
      );
      if (!itemInCart || state.items.length === 0) {
        newCartItem.total = newCartItem.price;
        state.items.push(newCartItem);
      } else {
        state.items.map((item) => {
          if (item.id === newCartItem.id) {
            item.quantity += 1;
            item.total = item.price * item.quantity;
          }
          return item;
        });
      }
      calcTotalCart(state);
    },
    delete_from_cart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      calcTotalCart(state);
    },
    increment_qty: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload) {
          item.quantity += 1;
          item.total = item.quantity * item.price;
        }
        return item;
      });
      calcTotalCart(state);
    },
    decrement_qty: (state, action) => {
      state.items.map((item) => {
        if (item.id === action.payload && item.quantity > 0) {
          item.quantity -= 1;
          item.total = item.quantity * item.price;
        }
        return item;
      });
      calcTotalCart(state);
    }
  }
})

export const { add_to_cart, delete_from_cart, increment_qty, decrement_qty } = cartSlice.actions;

export default cartSlice.reducer;
