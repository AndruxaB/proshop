import { productListReducer, productDetailsReducer } from './productReducers';
import { cartReducer } from './cartReducers';
import { userLoginReducer } from './userReducers';

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
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

// export const initialState = {}; // some initial state for reducers
export const initialState = { cart: { cartItems: cartItemsFromStorage }, userLogin: { userInfo: userInfoFromStorage } }; // some initial state for reducers

export const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
});
