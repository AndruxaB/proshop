import * as ACTION_TYPES from '../constants/cartActionTypes';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ACTION_TYPES.CART_ADD_ITEM:
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
                    cartItems: [...state.cartItems, item],
                };
            }

        default:
            return state;
    }
};
