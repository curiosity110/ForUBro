import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./reducers/itemsReducer";
import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";


export default configureStore({
  reducer: {
    items: itemsReducer,
    cart: cartReducer,
    user: userReducer,
  }
});