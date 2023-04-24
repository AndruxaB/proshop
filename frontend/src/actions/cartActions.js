import axios from 'axios';
import * as actionTypes from '../constants/cartActionTypes';

export const addToCart = async (id, qty, dispatch) => {
    try {
        const { data } = await axios.get(`/api/products/${id}`);
        const payload = {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty: Number(qty),
        };
        dispatch({ type: actionTypes.CART_ADD_ITEM, payload });
    } catch (error) {}
};

export const removeFromCart = (id, dispatch) => {
    console.log('action remove', id);
    // const payload = { id };
    try {
        dispatch({ type: actionTypes.CART_REMOVE_ITEM, payload: { id } });
    } catch (error) {}
};
