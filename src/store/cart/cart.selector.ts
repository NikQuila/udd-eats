import { RootState } from "../store"; // Import your RootState here

export const selectCart = (state: RootState) => state.cart.currentCart;
