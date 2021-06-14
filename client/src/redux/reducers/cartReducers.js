import * as actionTypes from '../constants/cartConstants';

export const cartReducers = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:

      const existItem = state.cartItems.find((itemInCart) => itemInCart.product === action.payload.product)

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((itemInCart) => itemInCart.product === existItem.product ? action.payload : itemInCart)
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        }
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((itemInCart) => itemInCart.product !== action.payload)
      }
    default:
      return state;
  }
}
