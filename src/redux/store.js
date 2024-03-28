import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./reducers/cart";
import wishlistReducer from "./reducers/wishlist";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
export default Store;
