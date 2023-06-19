import { AnyAction } from "@reduxjs/toolkit";
import { CartState } from "../../utils/types";
import { CartAction } from "./cart.actions";
import { CART_ACTION_TYPES } from "./cart.types";

export interface CartRedux {
  currentCart: CartState;
}

const INITIAL_STATE: CartRedux = {
  currentCart: {
    cartItems: [],
    total: 0,
  },
};

export const cartReducer = (
  state: CartRedux = INITIAL_STATE,
  action: CartAction | AnyAction
): CartRedux => {
  switch (action.type) {
    case CART_ACTION_TYPES.SET_CART:
      return { ...state, currentCart: action.payload };
    default:
      return state;
  }
};
