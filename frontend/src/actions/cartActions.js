import axios from 'axios';
import * as helpers from '../helpers/helpers';
import * as ACTION_TYPES from '../constants/cartActionTypes';

export const addToCart = (id, qty) => async (state, dispatch, setIsLoading) => {
    try {
        await helpers.delayMs(500);
        const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
        dispatch({
            type: ACTION_TYPES.CART_ADD_ITEM,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty,
            },
        });
        localStorage.setItem('cartItems', JSON.stringify(state.cart.cartItems));
        setIsLoading(false);
    } catch (error) {}
};
