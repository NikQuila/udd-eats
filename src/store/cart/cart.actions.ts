import { createAction } from "../reducer/reducer";
import { CartState } from "../../utils/types";
import { CART_ACTION_TYPES } from "./cart.types";

export const setCart = (cart: CartState) => {
  return createAction(CART_ACTION_TYPES.SET_CART, cart);
};

export const addToCart = (cart: CartState) => {
  return createAction(CART_ACTION_TYPES.ADD_TO_CART, cart);
};

export interface CartAction {
  type: typeof CART_ACTION_TYPES.SET_CART;
  payload: CartState;
}

export interface AddToCartAction {
  type: typeof CART_ACTION_TYPES.ADD_TO_CART;
  payload: CartState;
}
