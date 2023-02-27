import * as actionTypes from '../constants/cartActionTypes';

// export const cartReducer = (state = { cartItems: [] }, action) => {
export const cartReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.CART_ADD_ITEM:
            console.log(state);
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.product === item.product);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => (x.product === existItem.product ? item : x)),
                };
            } else {
                return {
                    ...state,
                    cartItems: [item, ...state.cartItems],
                };
            }

        default:
            return state;
    }
};
