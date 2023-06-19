// Redux
import { configureStore } from "@reduxjs/toolkit";
// Reducers
import { cartReducer } from "./cart/cart.reducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
