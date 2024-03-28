import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartReducer = createReducer(initialState, (builder) => {
  // builder.addCase("addToCart", (state, action) => {
  //   const item = action.payload;
  //   const isItemExist = state.cart.find((i) => i._id === item._id);
  //   if (isItemExist) {
  //     return {
  //       ...state,
  //       cart: state.cart.map((i) => (i._id === isItemExist._id ? item : i)),
  //     };
  //   } else {
  //     return {
  //       ...state,
  //       cart: [...state.cart, item],
  //     };
  //   }
  // });
  // builder.addCase("addToCart", (state, action) => {
  //   const item = action.payload;
  //   const existingItemIndex = state.cart.findIndex((i) => i._id === item._id);

  //   if (existingItemIndex !== -1) {
  //     // If item already exists, update its quantity instead of replacing it
  //     const updatedCart = [...state.cart];
  //     updatedCart[existingItemIndex] = {
  //       ...updatedCart[existingItemIndex],
  //       quantity: updatedCart[existingItemIndex].quantity + 1,
  //     };

  //     return {
  //       ...state,
  //       cart: updatedCart,
  //     };
  //   } else {
  //     // If item doesn't exist, add it to the cart
  //     return {
  //       ...state,
  //       cart: [...state.cart, { ...item, quantity: 1 }],
  //     };
  //   }
  // });
  builder.addCase("addToCart", (state, action) => {
    const item = action.payload;
    const existingItemIndex = state.cart.findIndex((i) => i.id === item.id);
    const alreadyExists = existingItemIndex !== -1;

    if (alreadyExists) {
      state.cart[existingItemIndex].qty += 1;
    } else {
      state.cart.push({ ...item, qty: 1 });
    }
  });

  builder.addCase("removeFromCart", (state, action) => {
    return {
      ...state,
      cart: state.cart.filter((i) => i.id !== action.payload),
    };
  });
});

export default cartReducer;
