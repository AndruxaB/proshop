import axios from 'axios';
import * as helpers from '../helpers/helpers';
import * as ACTION_TYPES from '../constants/productActionTypes';

export const listProducts = async (dispatch, setIsLoading) => {
    console.log('Products Home function');
    try {
        // dispatch({ type: ACTION_TYPES.PRODUCT_LIST_REQUEST });
        // Setting delay for testing purposes
        await helpers.delayMs(500);

        const { data } = await axios.get('http://localhost:5000/api/products');
        dispatch({ type: ACTION_TYPES.PRODUCT_LIST_SUCCESS, payload: data });
        setIsLoading(false);
    } catch (error) {
        dispatch({ type: ACTION_TYPES.PRODUCT_LIST_FAIL, payload: error.message });
        setIsLoading(false);
    }
};

export const listProductDetails = async (id, dispatch, setIsLoading) => {
    console.log('list product details function');
    try {
        // dispatch({ type: ACTION_TYPES.PRODUCT_DETAILS_REQUEST });
        // Setting delay for testing purposes
        await helpers.delayMs(500);

        const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
        // console.log(data);
        dispatch({ type: ACTION_TYPES.PRODUCT_DETAILS_SUCCESS, payload: data });
        setIsLoading(false);
    } catch (error) {
        dispatch({ type: ACTION_TYPES.PRODUCT_DETAILS_FAIL, payload: error.message });
        setIsLoading(false);
    }
};
