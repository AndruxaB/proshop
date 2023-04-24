import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartActionTypes';

// export const cartReducer = (state = { cartItems: [] }, action) => {
export const cartReducer = (state, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.product === item.product);
            if (existItem) {
                const cartItems = state.cartItems.map((x) => (x.product === existItem.product ? item : x));
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                return { cartItems };
            } else {
                const cartItems = [...state.cartItems, item];
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                return { cartItems };
            }

        case CART_REMOVE_ITEM:
            console.log('remove reducer', action.payload);
            const cartItems = state.cartItems.filter((item) => item.product !== action.payload.id);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            return { cartItems };

        default:
            return state;
    }
};
