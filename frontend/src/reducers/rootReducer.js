import { productListReducer, productDetailsReducer } from './productReducers';
import { cartReducer } from './cartReducers';

const combineReducers = (slices) => (state, action) =>
    Object.keys(slices).reduce(
        // use for..in loop, if you prefer it

        (acc, prop) => ({
            ...acc,
            [prop]: slices[prop](acc[prop], action),
        }),
        state
    );

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

export const initialState = { cart: { cartItems: cartItemsFromStorage } }; // some initial state for reducers

export const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
});
