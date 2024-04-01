import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./reducers/cart";
import wishlistReducer from "./reducers/wishlist";
import { userReducer } from "./reducers/user";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    user: userReducer,
  },
});
export default Store;
