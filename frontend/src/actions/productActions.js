import axios from 'axios';
import * as helpers from '../helpers/helpers';
import * as actionTypes from '../constants/productActionTypes';

export const listProducts = async (dispatch, setIsLoading) => {
    try {
        dispatch({ type: actionTypes.PRODUCT_LIST_REQUEST });
        // Setting delay for testing purposes
        await helpers.delayMs(500);

        const { data } = await axios.get('http://localhost:5000/api/products');
        dispatch({ type: actionTypes.PRODUCT_LIST_SUCCESS, payload: data });
        setIsLoading(false);
    } catch (error) {
        dispatch({ type: actionTypes.PRODUCT_LIST_FAIL, payload: error.message });
        setIsLoading(false);
    }
};

export const listProductDetails = async (id, dispatch, setIsLoading) => {
    try {
        // Setting delay for testing purposes
        await helpers.delayMs(500);

        const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
        dispatch({ type: actionTypes.PRODUCT_DETAILS_SUCCESS, payload: data });
        setIsLoading(false);
    } catch (error) {
        dispatch({ type: actionTypes.PRODUCT_DETAILS_FAIL, payload: error.message });
        setIsLoading(false);
    }
};
