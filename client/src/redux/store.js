import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//Reducers
import { getProductsReducers, getProductDetailsReducers } from './reducers/productReducers';
import { cartReducers } from './reducers/cartReducers';

const rootReducer = combineReducers({
  cart: cartReducers,
  getProducts: getProductsReducers,
  getProductDetails: getProductDetailsReducers
});

const cartFromLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

const INIT_STATE = {
  cart: {
    cartItems: cartFromLocalStorage
  }
}
const store = createStore(
  rootReducer,
  INIT_STATE,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
