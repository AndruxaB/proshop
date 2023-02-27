import axios from 'axios';
import * as helpers from '../helpers/helpers';
import * as actionTypes from '../constants/cartActionTypes';

export const addToCart = async (id, qty, state, dispatch) => {
    try {
        const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
        dispatch({
            type: actionTypes.CART_ADD_ITEM,
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
    } catch (error) {}
};
